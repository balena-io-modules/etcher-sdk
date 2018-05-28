import * as Bluebird from 'bluebird';
import { Disk } from 'file-disk';
import * as _ from 'lodash';
import { outdent } from 'outdent';
import { interact, AsyncFsLike } from 'resin-image-fs';

const NETWORK_SETTINGS_KEYS = ['wifiSsid', 'wifiKey', 'ip', 'netmask', 'gateway', 'routeMetric'];

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
		id=resin-wifi-${pad(index)}
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

const createNetworkConfigFiles = (networks: any) => {
	return {
		ethernet: _(networks)
			.map('configuration')
			.filter()
			.value(),
		wifi: _(networks)
			.filter('wifiSsid')
			.map((network, index) => {
				return nmWifiConfig(index + 1, network);
			})
			.value(),
	};
};

const pad = (num: number): string => {
	return _.padStart(`${num}`, 2, '0');
};

export const execute = async (operation: any, disk: Disk): Promise<void> => {
	if (!operation.data) {
		throw new Error('config.json data missing from operation options');
	}
	if (!operation.partition) {
		throw new Error('partition information missing from operation options');
	}

	let config = operation.data;

	// FIXME: init with an empty list once the api no longer uses ('wifiSsid', 'wifiKey', 'ip', 'netmask', 'gateway')
	const networks = [_.pick(config, ...NETWORK_SETTINGS_KEYS)];
	if (config.network) {
		networks.push(...config.network);
	}
	const networkConfigFiles = createNetworkConfigFiles(networks);
	// FIXME: no need to remove wifiSsid, wifiKey, ip, netmask and gateway once api is updated
	config = _.omit(config, 'network', ...NETWORK_SETTINGS_KEYS);

	await Bluebird.using(interact(disk, operation.partition), async (fs: AsyncFsLike) => {
		await fs.writeFileAsync('/config.json', JSON.stringify(config));
		let index;
		for (index=0; index<networkConfigFiles.ethernet.length; index++) {
			await fs.writeFileAsync(`/system-connections/connection-${pad(index + 1)}`, networkConfigFiles.ethernet[index]);
		}
		for (index=0; index<networkConfigFiles.wifi.length; index++) {
			await fs.writeFileAsync(`/system-connections/connection-${pad(index + 1)}`, networkConfigFiles.wifi[index]);
		}
	});
};
