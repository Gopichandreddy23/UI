this.onmessage = function(e) {
    const { data } = e;
    this.postMessage({ "result": data.arg1 + data.arg2 });
}
