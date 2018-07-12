export const streamToBuffer = async (stream: NodeJS.ReadableStream): Promise<Buffer> => {
	return await new Promise((resolve: (buffer: Buffer) => void, reject: (error: Error) => void) => {
		const chunks: Buffer[] = [];
		stream.on('error', reject);
		stream.on('data', chunks.push.bind(chunks));
		stream.on('end', () => {
			resolve(Buffer.concat(chunks));
		});
	});
};

export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
	const _difference = new Set(setA);
	for (const elem of setB) {
		_difference.delete(elem);
	}
	return _difference;
}

export function asCallback(promise: Promise<any>, callback: (error: Error | void, value?: any) => void) {
	promise.then((value: any) => {
		callback(undefined, value);
	}).catch(callback)
}
