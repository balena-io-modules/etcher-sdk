import { Transform } from "stream"
import { createHash } from "crypto"

// minimal typescript reimplementation of https://github.com/jeffbski/digest-stream/blob/master/lib/digest-stream.js

const digestStream = (exfiltrate: Function): Transform => {
  const digester = createHash("sha256")
  let length = 0

  const hashThrough = new Transform({
    transform(chunk: Buffer, _, callback) {
      digester.update(chunk)
      length += chunk.length
      this.push(chunk)
      callback()
    },
  })

  hashThrough.on("end", () => {
    exfiltrate(digester.digest("hex"), length)
  })

  return hashThrough
}

export { digestStream }
