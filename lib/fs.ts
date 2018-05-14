import * as fs from 'fs';
import { promisify } from 'util';

export const close = promisify(fs.close);
export const fstat = promisify(fs.fstat);
export const fsync = promisify(fs.fsync);
export const open = promisify(fs.open);
export const read = promisify(fs.read);
export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.readFile);
export const unlink = promisify(fs.unlink);
export const write = promisify(fs.write);
