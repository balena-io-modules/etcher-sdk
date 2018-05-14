export const streamToBuffer = async (stream: NodeJS.ReadableStream): Promise<Buffer> => {
	return await new Promise((resolve: (buffer: Buffer) => void, reject: (error: Error) => void) => {
		const chunks: Buffer[] = [];
		stream.on('error', reject);
		stream.on('data', chunks.push.bind(chunks));
		stream.on('end', () => {
			resolve(Buffer.concat(chunks));
		});
	});
}

