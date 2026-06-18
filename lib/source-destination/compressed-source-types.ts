export interface ImageJSONPart {
	filename: string;
	crc: number;
	len: number;
	zLen: number;
	partitionIndex?: string;
}

export type ImageJSON = Record<string, { parts: ImageJSONPart[] }>;

export interface ImagePartInfo {
	filename: string;
	parts: Array<{
		zLen: number;
		len: number;
	}>;
}
