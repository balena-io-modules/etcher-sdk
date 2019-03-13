declare module 'cli-spinner' {
	export class Spinner {
		constructor(title: string);
		public start(): void;
		public setSpinnerTitle(title: string): void;
		public setSpinnerDelay(ms: number): void;
		public stop(): void;
	}
}
