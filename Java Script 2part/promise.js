const promiseOne = new Promise( function(resolve, reject) {
        // Do an async task
        // DB Calls, cryptograpgy, network

    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 3000)
})

promiseOne.then(function() {
    console.log("Promise Consumed");
})