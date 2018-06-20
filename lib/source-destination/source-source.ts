import { SourceDestination } from './source-destination';

export class SourceSource extends SourceDestination {
	constructor(protected source: SourceDestination) {
		super();
	}

	protected async _open(): Promise<void> {
		await this.source.open();
	}

	protected async _close(): Promise<void> {
		await this.source.close();
	}
}
