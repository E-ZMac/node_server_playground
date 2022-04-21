import { readFile } from "fs/promises"

// Debug logic, this is the last thing that will run
// i.e. an 'exception' that isn't caught
process.on('uncaughtException', (e) => {
    console.log(e)
})

const result = readFile(new URL('app.mjs', import.meta.url), 'utf-8')