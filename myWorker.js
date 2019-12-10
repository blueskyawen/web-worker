importScripts("factorial.js");

self.onmessage = function(e) {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    if (e.data.type === 'close') {
        let value = +e.data.data;
        if (isNaN(value)) {
            postMessage('Please write number');
        } else {
            let workerResult = factorial(value);
            console.log('Worker: Posting message back to main script');
            postMessage(workerResult);
        }
    } else {
        self.close();
    }
};
