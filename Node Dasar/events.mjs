import {EventEmitter} from 'events'

const emmitter = new EventEmitter()

emmitter.addListener('hello', (name) => {
    console.info(`Hello ${name}`)
})

emmitter.emit('hello', 'Lenovo')