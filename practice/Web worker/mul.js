this.onmessage=function(e){
    const {data}=e;
    this.postMessage({"mulresult":data.arg1*data.arg2});
}