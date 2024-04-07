import fs from 'fs'
import {Console} from 'console'

const info = fs.createWriteStream('info.log')
const error = fs.createWriteStream('error.log')

const logInfo = new Console({
    stdin: info,
    stdout: info
})

const logError = new Console({
    stdin: error,
    stdout: error
})

const person = {
    name: "willy",
    age: 17
}

logInfo.info(person)
logError.info("error 404")