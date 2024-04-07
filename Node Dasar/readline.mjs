// redline = membaca input dari user
import readline from 'readline'
import process from 'process'

const rl = readline.createInterface({
    stdin: process.stdin, 
    stdout: process.stdout
})


rl.question("what's your name?", (isName) => {
    console.info(`Helo ${isName}`)
    rl.close()
})

