import http from "http"

const endpoint = ""
const req = http.request(endpoint, {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },    
}, (res) => {
    res.addListener('data', (data) => {
        console.info(`Recive: ${data.toString()}`)
    })
}
)

const body = {
    name: 'Wang',
    age: 20
}

req.write(body)
req.end()