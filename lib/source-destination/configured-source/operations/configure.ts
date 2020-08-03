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

import { interact } from 'balena-image-fs';
import { Disk } from 'file-disk';
import { outdent } from 'outdent';
import { promisify } from 'util';

interface WifiConfig {
	wifiSsid: string;
	wifiKey?: string;
	routeMetric?: number | string;
	ip?: string;
	netmask?: string;
	gateway?: string;
}

const nmWifiConfig = (index: number, options: WifiConfig): string => {
	let config = outdent`
		[connection]
		id=balena-wifi-${pad(index)}
		type=wifi

		[wifi]
		hidden=true
		mode=infrastructure
		ssid=${options.wifiSsid}

		[ipv4]
	`;
	if (options.routeMetric) {
		config += outdent`

			route-metric=${options.routeMetric}
		`;
	}

	if (options.ip && options.netmask && options.gateway) {
		config += outdent`

			method=manual
			address1=${options.ip}/${options.netmask},${options.gateway}
		`;
	} else {
		config += outdent`

			method=auto
		`;
	}

	config += outdent`


		[ipv6]
		addr-gen-mode=stable-privacy
		method=auto
	`;
	if (options.wifiKey) {
		config += outdent`


			[wifi-security]
			auth-alg=open
			key-mgmt=wpa-psk
			psk=${options.wifiKey}
		`;
	}
	console.log('network config file:\n', config);
	return config;
};

const createNetworkConfigFiles = (networks: any[]) => {
	return {
		ethernet: networks.map((n: any) => n.configuration).filter((n: any) => !!n),
		wifi: networks
			.filter((n) => !!n.wifiSsid)
			.map((network: WifiConfig, index: number) =>
				nmWifiConfig(index + 1, network),
			),
	};
};

const pad = (num: number): string => {
	return `${num}`.padStart(2, '0');
};

export const execute = async (operation: any, disk: Disk): Promise<void> => {
	if (!operation.data) {
		throw new Error('config.json data missing from operation options');
	}
	if (!operation.partition) {
		throw new Error('partition information missing from operation options');
	}
	const {
		wifiSsid,
		wifiKey,
		ip,
		netmask,
		gateway,
		routeMetric,
		network,
		...config
	} = operation.data;
	// FIXME: init with an empty list once the api no longer uses ('wifiSsid', 'wifiKey', 'ip', 'netmask', 'gateway')
	const networks = [
		{ wifiSsid, wifiKey, ip, netmask, gateway, routeMetric },
		...network,
	];
	const networkConfigFiles = createNetworkConfigFiles(networks);

	await interact(disk, operation.partition, async (fs) => {
		const writeFileAsync = promisify(fs.writeFile);
		await writeFileAsync('/config.json', JSON.stringify(config));
		let index;
		for (index = 0; index < networkConfigFiles.ethernet.length; index++) {
			await writeFileAsync(
				`/system-connections/connection-${pad(index + 1)}`,
				networkConfigFiles.ethernet[index],
			);
		}
		for (index = 0; index < networkConfigFiles.wifi.length; index++) {
			await writeFileAsync(
				`/system-connections/connection-${pad(index + 1)}`,
				networkConfigFiles.wifi[index],
			);
		}
	});
};
