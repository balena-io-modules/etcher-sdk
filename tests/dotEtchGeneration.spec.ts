/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { expect } from "chai";
import * as dotEtch from "../lib/dotetch/";
import * as fs from "fs";
import { join } from "path";
import { extract, Pack } from "tar-stream";

const baseImage = join(__dirname, "data", "images", "disk.img");

const test = async (
	expectFn: Function,
	injectFn: Function | null,
	done: Function
) => {
	const writeStream = extract();
	const readStream = fs.createReadStream(baseImage);
	const size = fs.statSync(baseImage)?.size;

	const files: any[] = [];
	writeStream.on("entry", (header, stream, next) => {
		files.push(header);

		stream.on("end", function () {
			next(); // ready for next entry
		});

		stream.resume(); // just auto drain the stream
	});

	writeStream.on("finish", () => {
		expectFn(files);
		done();
	});

	// prepare
	const packStream = dotEtch.prepareEtchStream(writeStream);

	// stream baseImage
	await dotEtch.streamBaseImage(packStream, readStream, size, "baseOs.img");

	// inject function
	if (injectFn) injectFn(packStream);

	// close
	dotEtch.closeEtchStream(packStream);
};

describe(".Etch Generation", function () {
	describe("Stream Base Image", function () {
		it("should produce a .etch file with a base image named baseOs.img", function (done) {
			test(
				(files: any[]) => {
					const baseOs = files.find((file) => file.name === "baseOs.img");
					expect(baseOs.name).to.be.equal("baseOs.img");
				},
				null,
				done
			);
		});

		it("should produce a .etch file with a base image size of 10485760", function (done) {
			test(
				(files: any[]) => {
					const baseOs = files.find((file) => file.name === "baseOs.img");
					expect(baseOs.mode).to.be.equal(644);
				},
				null,
				done
			);
		});

		it("should produce a .etch file with a base image mode of 644", function (done) {
			test(
				(files: any[]) => {
					const baseOs = files.find((file) => file.name === "baseOs.img");
					expect(baseOs.mode).to.be.equal(644);
				},
				null,
				done
			);
		});
	});

	describe("Create files", function () {
		it("should add a text file name fakeFile", function (done) {
			const testFn = (files: any[]) => {
				const fakeFile = files.find((file) => file.name === "fakeFile");
				expect(fakeFile.name).to.be.equal("fakeFile");
			};

			const injectionFn = (packStream: Pack) => {
				packStream.entry({ name: "fakeFile", mode: 777 }, "fakeContent");
			};

			test(testFn, injectionFn, done);
		});

		it("should add a text file name fakeFile with mode 777", function (done) {
			const testFn = (files: any[]) => {
				const fakeFile = files.find((file) => file.name === "fakeFile");
				expect(fakeFile.mode).to.be.equal(777);
			};

			const injectionFn = (packStream: Pack) => {
				packStream.entry({ name: "fakeFile", mode: 777 }, "fakeContent");
			};

			test(testFn, injectionFn, done);
		});

		it("should add a text file name fakeFile with 11 bytes (_fakeContent_)", function (done) {
			const testFn = (files: any[]) => {
				const fakeFile = files.find((file) => file.name === "fakeFile");
				expect(fakeFile.size).to.be.equal(11);
			};

			const injectionFn = (packStream: Pack) => {
				packStream.entry({ name: "fakeFile", mode: 777 }, "fakeContent");
			};

			test(testFn, injectionFn, done);
		});
	});
});
