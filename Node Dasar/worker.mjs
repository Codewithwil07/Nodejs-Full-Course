import { threadId, parentPort} from 'worker_threads'

parentPort.addListener('message', (message) => {

    for (let i = 0; i < message; i++) {
        console.info(`theread ${threadId} send ${message}`)
        parentPort.postMessage(i)
    }

    parentPort.close()
})
