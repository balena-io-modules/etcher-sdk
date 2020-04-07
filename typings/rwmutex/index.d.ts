declare module 'rwmutex' {
	class RWMutex {
		public lock: () => Promise<() => void>;
		public rlock: () => Promise<() => void>;
	}
	export = RWMutex;
}
