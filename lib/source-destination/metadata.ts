import BlockMap = require('blockmap');

export interface Metadata {
	size?: number;
	compressedSize?: number;
	blockmappedSize?: number;
	name?: string;
	blockMap?: BlockMap;
	instructions?: string;
	logo?: string;
	bytesToZeroOutFromTheBeginning?: number;
	checksum?: string;
	checksumType?: string;
	recommendedDriveSize?: number;
	releaseNotesUrl?: string;
	supportUrl?: string;
	url?: string;
	version?: string;
	isEtch?: boolean;

}
