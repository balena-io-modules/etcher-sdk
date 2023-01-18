import * as permissions from '../shared/permissions';

export async function migrate() {
	try {
		if (await permissions.isElevated()) {
			// good to go
			console.log('good');
		} else {
			throw Error("User is not admin");
		}
	} catch (error) {
		console.log("Migrator has to run from an administrator command line.", error);
		// TODO: ask for elevation instead of quitting
		return;
	}
}
