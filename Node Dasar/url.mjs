import {URL} from 'url'

const url = new URL("https://willy.co.id")

url.href = "https://wang.com"
url.searchParams.append("hobby", "turu")

console.info(url.toString())
console.info(url.href)
console.info(url.protocol)
console.info(url.host)
console.info(url.hostname)
console.info(url.searchParams)