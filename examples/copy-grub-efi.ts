import * as drivelist from 'drivelist';
import { interact } from 'balena-image-fs';
import { promisify } from 'util';
import * as fileSystem from 'fs';

// TODO args
const IMG_PATH = "c:/Users/peter/Desktop/flasher-ext.img"
const DRIVE_LETTER = "M";

const main = async () => {
    let x = await drivelist.list()
    console.log(x.map(D => D.mountpoints));

    const balenaBootFiles = await interact(IMG_PATH, 1, async (fs) => {
        return await promisify(fs.readdir)('/EFI/BOOT');
    })

    for (let fileName of balenaBootFiles) {
        const fromPath = `/EFI/BOOT/${fileName}`;
        const toPath = `${DRIVE_LETTER}:/EFI/Boot/${fileName}`;

        await interact(IMG_PATH, 1, async (fs) => {
            try {
                const fromBalenaFile = fs.createReadStream(fromPath)

                // mountvol M: /S
                // M:/ is available only in the same admin console where mountvol ran
                const toWindows =  fileSystem.createWriteStream(toPath)
            
                // danger zone
                console.log(`Writing: ${fromPath} \t~=>\t ${toPath}`)

                await new Promise((resolve, reject) => {
                    fromBalenaFile
                        .on('error', reject)
                        .pipe(toWindows)
                        .on('error', reject)
                        .on('close', resolve);
                });
            } catch (error) {
                console.log(`Error: `, error)
            }
        })
    }
}

main();