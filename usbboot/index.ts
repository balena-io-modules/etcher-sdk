/*
 * This work is heavily based on https://github.com/raspberrypi/usbboot
 * Copyright 2016 Raspberry Pi Foundation
 */

import * as Bluebird from 'bluebird';
import { EventEmitter } from 'events';
import * as Path from 'path';
import * as usb from 'usb';

import { readFile } from '../fs';

// The equivalent of a NULL buffer, given that node-usb complains
// if the data argument is not an instance of Buffer
const NULL_BUFFER = Buffer.alloc(0)

/**
 * @summary The size of the boot message bootcode length section
 */
const BOOT_MESSAGE_BOOTCODE_LENGTH_SIZE = 4

/**
 * @summary The offset of the boot message bootcode length section
 */
const BOOT_MESSAGE_BOOTCODE_LENGTH_OFFSET = 0

/**
 * @summary The size of the boot message signature section
 */
const BOOT_MESSAGE_SIGNATURE_SIZE = 20

/**
 * @summary The offset of the file message command section
 */
const FILE_MESSAGE_COMMAND_OFFSET = 0

/**
 * @summary The size of the file message command section
 */
const FILE_MESSAGE_COMMAND_SIZE = 4

/**
 * @summary The offset of the file message file name section
 */
const FILE_MESSAGE_FILE_NAME_OFFSET = FILE_MESSAGE_COMMAND_SIZE

/**
 * @summary The size of the file message file name section
 */
const FILE_MESSAGE_FILE_NAME_SIZE = 256

/**
 * @summary The GET_STATUS usb control transfer request code
 * @description
 * See http://www.jungo.com/st/support/documentation/windriver/811/wdusb_man_mhtml/node55.html#usb_standard_dev_req_codes
 */
const USB_REQUEST_CODE_GET_STATUS = 0

/**
 * @summary The maximum buffer length of a usbboot message
 */
const USBBOOT_MESSAGE_MAX_BUFFER_LENGTH = 0xffff

/**
 * @summary The amount of bits to shift to the right on a control transfer index
 */
const CONTROL_TRANSFER_INDEX_RIGHT_BIT_SHIFT = 16

/**
 * @summary The size of the usbboot file message
 */
const FILE_MESSAGE_SIZE = FILE_MESSAGE_COMMAND_SIZE + FILE_MESSAGE_FILE_NAME_SIZE

/**
 * @summary The usbboot return code that represents success
 */
const RETURN_CODE_SUCCESS = 0

/**
 * @summary The buffer length of the return code message
 */
const RETURN_CODE_LENGTH = 4
/**
 * @summary The timeout for USB control transfers, in milliseconds
 */
// In node-usb, 0 means "infinite" timeout
const USB_CONTROL_TRANSFER_TIMEOUT_MS = 0

const USB_ENDPOINT_INTERFACES_SOC_BCM2835 = 1
const USB_VENDOR_ID_BROADCOM_CORPORATION = 0x0a5c
const USB_PRODUCT_ID_BCM2708_BOOT = 0x2763
const USB_PRODUCT_ID_BCM2710_BOOT = 0x2764

// When the pi reboots in mass storage mode, it has this product id
const USB_PRODUCT_ID_MASS_STORAGE = 0x0001

enum FileMessageCommand {
	GetFileSize,
	ReadFile,
	Done,
}

const getCommand = (fileMessageBuffer: Buffer): FileMessageCommand => {
	const command = fileMessageBuffer.readInt32LE(FILE_MESSAGE_COMMAND_OFFSET)
	if (!(command in FileMessageCommand)) {
		throw new Error(`Invalid file message command code: ${command}`)
	}
	return command;
}

const getFilename = (fileMessageBuffer: Buffer): string => {
	// The parsed string will likely contain tons of trailing
	// null bytes that we should get rid of for convenience
	let end = fileMessageBuffer.indexOf(0, FILE_MESSAGE_FILE_NAME_OFFSET)
	if (end === -1) {
		end = fileMessageBuffer.length
	}
	return fileMessageBuffer.slice(FILE_MESSAGE_FILE_NAME_OFFSET, end).toString('ascii')
}

/**
 * @summary Parse a file message buffer from a device
 */
const parseFileMessageBuffer = (fileMessageBuffer: Buffer): { command: FileMessageCommand, filename: string } => {
	let command = getCommand(fileMessageBuffer);
	const filename = getFilename(fileMessageBuffer);
	// A blank file name can also mean "done"
	if (filename === '') {
		command = FileMessageCommand.Done;
	}
	return { command, filename }
}

/**
 * @summary Perform a USB control transfer
 * @description
 * See http://libusb.sourceforge.net/api-1.0/group__syncio.html
 */
const performControlTransfer = async (
	device: usb.Device,
	bmRequestType: number,
	bRequest: number,
	wValue: number,
	wIndex: number,
	dataOrLength: Buffer | number,
) => {
	const previousTimeout = device.timeout
	device.timeout = USB_CONTROL_TRANSFER_TIMEOUT_MS
	const result = await Bluebird.fromCallback((callback) => {
		device.controlTransfer(
			bmRequestType,
			bRequest,
			wValue,
			wIndex,
			dataOrLength,
			callback,
		)
	})
	device.timeout = previousTimeout;
	return result;
}

const isUsbBootCapableUSBDevice = (device: usb.Device): boolean => {
	return (
		(device.deviceDescriptor.idVendor === USB_VENDOR_ID_BROADCOM_CORPORATION) &&
		(
			(device.deviceDescriptor.idProduct === USB_PRODUCT_ID_BCM2708_BOOT) ||
			(device.deviceDescriptor.idProduct === USB_PRODUCT_ID_BCM2710_BOOT)
		)
	);
}

const initializeDevice = (device: usb.Device): { iface: usb.Interface, endpoint: usb.Endpoint } => {
	// interface is a reserved keyword in TypeScript so we use iface
	device.open()
	// Handle 2837 where it can start with two interfaces, the first is mass storage
	// the second is the vendor interface for programming
	let interfaceNumber;
	let endpointNumber;
	if (device._configDescriptor.bNumInterfaces === USB_ENDPOINT_INTERFACES_SOC_BCM2835) {
		interfaceNumber = 0
		endpointNumber = 1
	} else {
		interfaceNumber = 1
		endpointNumber = 3
	}
	const iface = device.interface(interfaceNumber)
	const endpoint = iface.endpoint(endpointNumber)
	console.log("Initialized device correctly");
	return { iface, endpoint }
}

const sendSize = async (device: usb.Device, size: number): Promise<void> => {
	await performControlTransfer(
		device,
		usb.LIBUSB_REQUEST_TYPE_VENDOR,
		USB_REQUEST_CODE_GET_STATUS,
		size & USBBOOT_MESSAGE_MAX_BUFFER_LENGTH,
		size >> CONTROL_TRANSFER_INDEX_RIGHT_BIT_SHIFT,
		NULL_BUFFER,
	);
}

const epWrite = async (buffer: Buffer, device: usb.Device, endpoint: usb.Endpoint) => {
	await sendSize(device, buffer.length)
	if (buffer.length > 0) {
		await Bluebird.fromCallback((callback) => {
			endpoint.transfer(buffer, callback)
		})
	}
}

const epRead = async (device: usb.Device, bytesToRead: number): Promise<Buffer> => {
	return await performControlTransfer(
		device,
		usb.LIBUSB_REQUEST_TYPE_VENDOR | usb.LIBUSB_ENDPOINT_IN,
		USB_REQUEST_CODE_GET_STATUS,
		bytesToRead & USBBOOT_MESSAGE_MAX_BUFFER_LENGTH,
		bytesToRead >> CONTROL_TRANSFER_INDEX_RIGHT_BIT_SHIFT,
		bytesToRead,
	)
}

const getDeviceId = (device: usb.Device): string => {
	return `${device.busNumber}:${device.deviceAddress}`
}

const getFileBuffer = async (filename: string): Promise<Buffer|undefined> => {
	try {
		return await readFile(Path.join(__dirname, 'blobs', filename))
	} catch (e) {
	}
}
/**
 * @summary Create a boot message buffer
 *
 * @description
 * This is based on the following data structure:
 *
 * typedef struct MESSAGE_S {
 *   int length;
 *   unsigned char signature[20];
 * } boot_message_t;
 *
 * This needs to be sent to the out endpoint of the USB device
 * as a 24 bytes big-endian buffer where:
 *
 * - The first 4 bytes contain the size of the bootcode.bin buffer
 * - The remaining 20 bytes contain the boot signature, which
 *   we don't make use of in this implementation
 */
const createBootMessageBuffer = (bootCodeBufferLength: number): Buffer => {
	const bootMessageBufferSize = BOOT_MESSAGE_BOOTCODE_LENGTH_SIZE + BOOT_MESSAGE_SIGNATURE_SIZE
	// Buffers are automatically filled with zero bytes
	const bootMessageBuffer = Buffer.alloc(bootMessageBufferSize)
	// The bootcode length should be stored in 4 big-endian bytes
	bootMessageBuffer.writeInt32BE(bootCodeBufferLength, BOOT_MESSAGE_BOOTCODE_LENGTH_OFFSET)
	return bootMessageBuffer
}

const secondStageBoot = async (device: usb.Device, endpoint: usb.Endpoint) => {
	const bootcodeBuffer = await getFileBuffer('bootcode.bin');
	if (bootcodeBuffer === undefined) {
		throw new Error("Can't find bootcode.bin")
	}
	const bootMessage = createBootMessageBuffer(bootcodeBuffer.length)
	await epWrite(bootMessage, device, endpoint);
	console.log(`Writing ${bootMessage.length} bytes`);
	await epWrite(bootcodeBuffer, device, endpoint);
	// raspberrypi's sample code has a sleep(1) here, but it looks like it isn't required.
	const data = await epRead(device, RETURN_CODE_LENGTH);
	const returnCode = data.readInt32LE(0)
	if (returnCode !== RETURN_CODE_SUCCESS) {
		throw new Error(`Couldn't write the bootcode, got return code ${returnCode} from device`)
	}
}

class UsbbootDevice extends EventEmitter {
	// LAST_STEP is hardcoded here as it is depends on the bootcode.bin file we send to the pi.
	// List of steps:
	// 0) device connects with iSerialNumber 0
	// 1) we write bootcode.bin to the device
	// 2) we read the status of the previous write
	// 3) the device detaches
	// 4) the device reattaches with iSerialNumber 1
	// 5) the device asks for the size of autoboot.txt
	// 6) we send 0
	// 7) the device asks for the size of config.txt
	// 8) we send 0
	// 9) the device asks for the size of recovery.elf
	// 10) we send 0
	// 11) the device asks for the size of start.elf
	// 12) we send the start.elf size
	// 13) the device asks for the start.elf contents
	// 14) we send the start.elf contents
	// 15) the device asks for the size of fixup.dat
	// 16) we send 0
	// 17) the device detaches
	// 18) the device reattaches as a mass storage device
	static LAST_STEP = 18;
	private _step = 0;

	constructor() {
		super()
	}

	get progress() {
		return Math.round((this._step / UsbbootDevice.LAST_STEP) * 100)
	}

	set step(step: number) {
		this._step = step;
		this.emit('progress', this.progress);
	}
}

class UsbbootScanner extends EventEmitter {
	private usbbootDevices = new Map();

	constructor() {
		super()
		this.start();
	}

	start(): void {
		usb.on('attach', attachDevice);
		usb.on('detach', detachDevice);
	}

	stop(): void {
		usb.removeListener('attach', attachDevice);
		usb.removeListener('detach', detachDevice);
		this.usbbootDevices.clear();
	}
	
	step(device: usb.Device, step: number): void {
		const usbbootDevice = this.getOrCreate(device);
		usbbootDevice.step = step;
		if (step === UsbbootDevice.LAST_STEP) {
			this.remove(device);
		}
	}

	private getOrCreate(device: usb.Device): UsbbootDevice {
		const key = portId(device);
		let usbbootDevice = this.usbbootDevices.get(key)
		if (usbbootDevice === undefined) {
			usbbootDevice = new UsbbootDevice();
			this.usbbootDevices.set(key, usbbootDevice);
			this.emit('attach', usbbootDevice);
		}
		return usbbootDevice;
	}

	private remove(device: usb.Device): void {
		const key = portId(device);
		let usbbootDevice = this.usbbootDevices.get(key)
		if (usbbootDevice !== undefined) {
			this.usbbootDevices.delete(key);
			this.emit('detach', usbbootDevice);
		}
	}
}

const fileServer = async (device: usb.Device, endpoint: usb.Endpoint) => {
	while (true) {
		let data
		try {
			data = await epRead(device, FILE_MESSAGE_SIZE)
		} catch (error) {
			if ((error.message === 'LIBUSB_ERROR_NO_DEVICE') || (error.message === 'LIBUSB_ERROR_IO')) {
				// Drop out if the device goes away
				break
			}
			await Bluebird.delay(100)
			continue
		}
		const message = parseFileMessageBuffer(data)
		console.log("Received message", FileMessageCommand[message.command], message.filename);
		if ((message.command === FileMessageCommand.GetFileSize) || (message.command === FileMessageCommand.ReadFile)) {
			const buffer = await getFileBuffer(message.filename);
			if (buffer === undefined) {
				console.log(`Couldn't find ${message.filename}`)
				await sendSize(device, 0);
			} else {
				if (message.command === FileMessageCommand.GetFileSize) {
					await sendSize(device, buffer.length)
				} else {
					await epWrite(buffer, device, endpoint);
				}
			}
		} else if (message.command === FileMessageCommand.Done) {
			break;
		}
	}
	console.log('File server done');
}

const portId = (device: usb.Device) => {
	return `${device.busNumber}-${device.portNumbers.join('.')}`
}

const attachDevice = async (device: usb.Device): Promise<void> => {
	if (!isUsbBootCapableUSBDevice(device)) {
		return;  // TODO: recognize MSD devices and set step to 18
	}
	console.log('Found serial number', device.deviceDescriptor.iSerialNumber, Date.now());
	console.log('port id', portId(device))
	const { iface, endpoint } = initializeDevice(device);
	if (device.deviceDescriptor.iSerialNumber === 0) {
		console.log("Sending bootcode.bin\n");
		await secondStageBoot(device, endpoint);
	} else {
		console.log("Second stage boot server\n");
		await fileServer(device, endpoint);
	}
	device.close();
}

const detachDevice = (device: usb.Device): void => {
	console.log('detach', portId(device), Date.now())
}

const main = async () => {
	console.log("Waiting for BCM2835/6/7\n");
	// Prepare already connected devices
	Bluebird.map(usb.getDeviceList(), attachDevice)
	// Watch for new devices being plugged in and prepare them
	usb.on('attach', attachDevice);
	// ...
	usb.on('detach', detachDevice);
}

const wrapper = async () => {
	try {
		await main()
	} catch (error) {
		console.error('boom', error)
	}
}

wrapper()
