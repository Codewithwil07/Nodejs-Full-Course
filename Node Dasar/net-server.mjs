import net from "net"

const server = net.createServer(function(client){
    console.info("Client Connected")

    client.addListener("data", (data) => {
        console.info(`Recive data`, data.toString())
        client.write(`Hello ${data.toString()}\r\n`)
    })
})

server.listen(3000, "localhost")

