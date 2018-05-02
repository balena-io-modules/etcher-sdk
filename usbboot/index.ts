/*
 * This work is heavily based on https://github.com/raspberrypi/usbboot
 * Copyright 2016 Raspberry Pi Foundation
 */

import * as Bluebird from 'bluebird';
import * as _ from 'lodash';
import * as Path from 'path';
import {
	Device as UsbDevice,
	Interface as UsbInterface,
	Endpoint as UsbEndpoint,
	getDeviceList,
	LIBUSB_REQUEST_TYPE_VENDOR,
	LIBUSB_ENDPOINT_IN,
} from 'usb';

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
const USBBOOT_CAPABLE_USB_DEVICES = [
	// BCM2835
	{
		vendorID: USB_VENDOR_ID_BROADCOM_CORPORATION,
		productID: USB_PRODUCT_ID_BCM2708_BOOT,
	},
	// BCM2837
	{
		vendorID: USB_VENDOR_ID_BROADCOM_CORPORATION,
		productID: USB_PRODUCT_ID_BCM2710_BOOT,
	},
]

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
	if (_.isEmpty(filename)) {
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
	device: UsbDevice,
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

const isUsbBootCapableUSBDevice = (device: UsbDevice): boolean => {
	return _.some(USBBOOT_CAPABLE_USB_DEVICES, {
		vendorID: device.deviceDescriptor.idVendor,
		productID: device.deviceDescriptor.idProduct,
	})
}

const initializeDevice = (device: UsbDevice): { iface: UsbInterface, endpoint: UsbEndpoint } => {
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
	console.log("Initialised device correctly");
	return { iface, endpoint }
}

const sendSize = async (device: UsbDevice, size: number): Promise<void> => {
	await performControlTransfer(
		device,
		LIBUSB_REQUEST_TYPE_VENDOR,
		USB_REQUEST_CODE_GET_STATUS,
		size & USBBOOT_MESSAGE_MAX_BUFFER_LENGTH,
		size >> CONTROL_TRANSFER_INDEX_RIGHT_BIT_SHIFT,
		NULL_BUFFER,
	);
}

const epWrite = async (buffer: Buffer, device: UsbDevice, endpoint: UsbEndpoint) => {
	await sendSize(device, buffer.length)
	if (buffer.length > 0) {
		await Bluebird.fromCallback((callback) => {
			endpoint.transfer(buffer, callback)
		})
	}
}

const epRead = async (device: UsbDevice, bytesToRead: number): Promise<Buffer> => {
	return await performControlTransfer(
		device,
		LIBUSB_REQUEST_TYPE_VENDOR | LIBUSB_ENDPOINT_IN,
		USB_REQUEST_CODE_GET_STATUS,
		bytesToRead & USBBOOT_MESSAGE_MAX_BUFFER_LENGTH,
		bytesToRead >> CONTROL_TRANSFER_INDEX_RIGHT_BIT_SHIFT,
		bytesToRead,
	)
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

const secondStageBoot = async (device: UsbDevice, endpoint: UsbEndpoint) => {
	const bootcodeBuffer = await getFileBuffer('bootcode.bin');
	if (bootcodeBuffer === undefined) {
		throw new Error("Can't find bootcode.bin")
	}
	const bootMessage = createBootMessageBuffer(bootcodeBuffer.length)
	await epWrite(bootMessage, device, endpoint);
	console.log(`Writing ${bootMessage.length} bytes`);
	await epWrite(bootcodeBuffer, device, endpoint);
	await Bluebird.delay(1000);
	const data = await epRead(device, RETURN_CODE_LENGTH);
	const returnCode = data.readInt32LE(0)
	if (returnCode !== RETURN_CODE_SUCCESS) {
		throw new Error(`Couldn't write the bootcode, got return code ${returnCode} from device`)
	}
}

const fileServer = async (device: UsbDevice, endpoint: UsbEndpoint) => {
	let going = 1;
	while (going) {
		let data
		try {
			data = await epRead(device, FILE_MESSAGE_SIZE)
		} catch (error) {
			if ((error.message === 'LIBUSB_ERROR_NO_DEVICE') || (error.message === 'LIBUSB_ERROR_IO')) {
				throw error
			}
			console.log('got error', error, 'waiting')
			await Bluebird.delay(1000)
			continue
		}
		const message = parseFileMessageBuffer(data)
		console.log("Received message", FileMessageCommand[message.command], message.filename);

		let buffer
		switch(message.command) {
			case FileMessageCommand.GetFileSize:
				buffer = await getFileBuffer(message.filename);
				if (buffer === undefined) {
					console.log(`Couldn't find ${message.filename}`)
					await sendSize(device, 0);
					console.log('error sent')
				} else {
					console.log('file size', buffer.length)
					await sendSize(device, buffer.length)
				}
				break;
			case FileMessageCommand.ReadFile:
				buffer = await getFileBuffer(message.filename);
				if (buffer === undefined) {
					console.log(`Couldn't find ${message.filename}`)
					await sendSize(device, 0);
				} else {
					await epWrite(buffer, device, endpoint);
				}
				break;
			case FileMessageCommand.Done:
				going = 0;
				break;
			default:
				throw new Error('Unknown message');
		}
	}
	console.log("Second stage boot server done\n");
}

let done = false;  // TODO: remove this hack

const prepareDevice = async (device: UsbDevice): Promise<void> => {
	// TODO: compare serial number with last serial number
	console.log("Found serial number", device.deviceDescriptor.iSerialNumber);
	const { iface, endpoint } = initializeDevice(device);
	if (device.deviceDescriptor.iSerialNumber === 0) {
		console.log("Sending bootcode.bin\n");
		await secondStageBoot(device, endpoint);
	} else {
		console.log("Second stage boot server\n");
		if (!done) {
			await fileServer(device, endpoint);
		}
		done = true
	}
	device.close();
}

const main = async () => {
	console.log("Waiting for BCM2835/6/7\n");
	while (true) {
		const devices = getDeviceList().filter(isUsbBootCapableUSBDevice) 
		await Bluebird.map(devices, prepareDevice)  // TODO: don't await
		await Bluebird.delay(1000)
	}
}

const wrapper = async () => {
	try {
		await main()
	} catch (error) {
		console.error('boom', error)
	}
}

wrapper()
