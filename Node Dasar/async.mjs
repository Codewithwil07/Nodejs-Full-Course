
function samplePromise(){
    return promise.resolve("Hello")
}

async function Run () {
    const data = samplePromise()
    console.log(data);
}

Run()