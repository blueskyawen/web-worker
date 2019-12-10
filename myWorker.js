importScripts("factorial.js");

self.onmessage = function(e) {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    //let value = e.data.numValue;
    if (isNaN(value)) {
        postMessage('Please write number');
    } else {
        let workerResult = factorial(5);
        console.log('Worker: Posting message back to main script');
        postMessage(workerResult);
    }
};
