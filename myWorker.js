importScripts("factorial.js");

self.onmessage = function(e) {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    console.log(self.navigator);
    console.log(self.location);
    if (e.data.type === 'data') {
        let value = +e.data.data;
        if (isNaN(value)) {
            self.postMessage('Please write number');
        } else {
            let workerResult = factorial(value);
            console.log('Worker: Posting message back to main script');
            setTimeout(() => {
                self.postMessage(workerResult);
            },2000);
        }
    } else {
        self.close();
    }
};
