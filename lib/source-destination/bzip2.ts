import { Transform } from 'stream';
import unbzip2Stream = require('unbzip2-stream');

import { SourceDestination } from './source-destination';
import { CompressedSource } from './compressed-source';

export class BZip2Source extends CompressedSource {
	static readonly mimetype = 'application/x-bzip2';

	protected createTransform(): Transform {
		return unbzip2Stream();
	}
}

SourceDestination.register(BZip2Source);
