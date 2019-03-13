declare module 'progress' {
	class ProgressBar {
		public curr: number;
		constructor(fmt: string, options: any);
		public tick(value: number, options: any): void;
		public terminate(): void;
	}

	export = ProgressBar;
}
