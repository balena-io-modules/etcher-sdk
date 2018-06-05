declare module 'speedometer' {
	function speedometer(seconds?: number): (delta?: number) => number;
	export = speedometer;
}
