export interface ImageJSONPart {
	filename: string;
	crc: number;
	len: number;
	zLen: number;
	partitionIndex?: string;
}

export type ImageJSON = Record<string, { parts: ImageJSONPart[] }>;
