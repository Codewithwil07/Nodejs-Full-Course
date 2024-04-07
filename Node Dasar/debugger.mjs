function sayHello(name) {
    debugger;
    return `Hello ${name}`  
}

const name = sayHello('Lenovo')

console.info(sayHello(name))

// syntax perintah di terminal:
// run code = node --inspect-brk debugger.mjs
// c = lanjutkan debug
// lihat isi variabel = watch(name)
// keluar = exit