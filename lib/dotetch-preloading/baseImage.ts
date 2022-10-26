/**
 * Get the base image we're going to preload assets in (balenaos.img)
 * */

interface StreamBaseImageIn {
  pipeStreamFrom: NodeJS.ReadableStream
  pipeStreamTo: NodeJS.WritableStream
}

/**
 * Awaitable pipe stream from input to output
 */
const streamBaseImage = ({ pipeStreamFrom, pipeStreamTo }: StreamBaseImageIn): Promise<boolean> =>
  new Promise((resolve, reject) => {
    console.log("== Start streaming base image (balenaOs) @streamBaseImage ==")

    pipeStreamFrom.pipe(pipeStreamTo)

    pipeStreamFrom.on("end", function () {
      // we're good we can continue the process
      console.log("== End of base image streaming (balenaOs) @streamBaseImage ==")
      resolve(true)
    })

    pipeStreamFrom.on("error", function (error) {
      // something went wrong
      reject(error)
    })
  })

export { streamBaseImage }
