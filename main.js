var $result = document.getElementById("result");
var $num = document.getElementById("num");

if (window.Worker) {
    var myworker = new Worker("myWorker.js");

    getFactorResult = function() {
        myworker.postMessage({type: 'data', data: $num.value});
        console.log('Message posted to worker');
    };

    myworker.onmessage = function(e) {
        $result.innerText = "Result: " + e.data;
        console.log('Message received from worker');
    };

    myworker.onerror = function(e) {  // 错误处理
        console.log('message: ' + e.message);
        console.log('filename: ' + e.filename);
        console.log('lineno: ' + e.lineno);
        e.preventDefault();
    };

    stopWorker = function() {
        myworker.terminate();  // 终止worker
        console.log('terminate worker');
    };

    closeWorker = function () {
        myworker.postMessage({type: 'close'});
        console.log('close worker');
    };
} else {
    console.log('Your browser doesn\'t support web workers.')
}
