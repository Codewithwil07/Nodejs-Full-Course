import fs from 'fs'

const buffer = fs.readFIle('file-system.mjs')

console.info(buffer.toString())