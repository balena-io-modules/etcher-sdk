declare module 'progress' {

	class ProgressBar {
		curr: number;
		constructor(fmt: string, options: any);
		tick(value: number, options: any): void;
	}

	export = ProgressBar;

}
