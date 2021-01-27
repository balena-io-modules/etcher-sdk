import { createServer, createConnection, Socket } from 'net';
import { argv } from 'process';
import { pipeline } from 'stream';
import { promisify } from 'util';

import { File } from './lib/source-destination';
import { RemoteDestination, RemoteSource } from './lib/rpc';

const pipelineAsync = promisify(pipeline);

const host = '0.0.0.0';
const port = 21000;

console.log(argv);

async function createServerr() {
	const socket = await new Promise<Socket>((resolve) => {
		const server = createServer((socket) => {
			resolve(socket);
		});
		server.listen(port, host);
	});
	const dest = new File({ path: argv[3], write: true });
	await dest.open();
	const source = new RemoteSource(dest, socket);
	const sourceStream = await source.createSparseReadStream({});
	const destinationStream = await dest.createSparseWriteStream();
	console.log('ok', await source.getMetadata());
	await pipelineAsync(sourceStream, destinationStream);
	console.log('ok0');
}

async function createClientAndSend() {
	const file = new File({ path: argv[2], write: false });
	const source = await file.getInnerSource();
	console.log('source', file === source);
	await source.open();
	const socket = createConnection({ host, port });
	await new Promise((resolve) => {
		socket.on('connect', resolve);
	});
	console.log('client ready 0');
	const dest = new RemoteDestination(source, socket);
	console.log('client ready 1');
	const sourceStream = await source.createSparseReadStream();
	console.log('client ready 2');
	const destinationStream = await dest.createSparseWriteStream();
	console.log('client ready 3');
	await pipelineAsync(sourceStream, destinationStream);
	console.log('client done 0');
}

async function main() {
	createServerr();
	await createClientAndSend();
}

main();
