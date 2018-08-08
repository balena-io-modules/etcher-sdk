declare module 'cli-spinner' {

	export class Spinner {
		constructor(title: string);
		start(): void;
		setSpinnerTitle(title: string): void;
		setSpinnerDelay(ms: number): void;
		stop(): void;
	}

}
