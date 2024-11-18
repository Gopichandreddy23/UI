this.onmessage=function(e){
    const {data}=e;
    this.postMessage({"subresult":data.arg1-data.arg2});
}