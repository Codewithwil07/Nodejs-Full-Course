import  process from "process"

process.addListener("exit", (exitcode) => {
    console.info(`Exit code ${exitcode}`)
})

console.info(process.version)
console.info(process.argv)
console.info(process.env)