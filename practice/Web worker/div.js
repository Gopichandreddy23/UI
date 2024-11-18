this.onmessage=function(e){
    const {data}=e;
    this.postMessage({"divresult":data.arg1/data.arg2});
}