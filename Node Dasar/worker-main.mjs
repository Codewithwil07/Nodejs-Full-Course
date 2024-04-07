import {threadId, Worker} from 'worker_threads'
const worker1 = new Worker("./Worker.mjs")
const worker2 = new Worker("./Worker.mjs")

worker1.addListener("message", (message) =>{console.info(`Thread ${threadId} revice from worker 1: ${message}`)})
worker2.addListener("message", (message) =>{console.info(`Thread ${threadId} revice from worker 2: ${message}`)})

worker1.postMessage(10)
worker2.postMessage(10)