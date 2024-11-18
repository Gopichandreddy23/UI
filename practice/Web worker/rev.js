this.onmessage=function(e){
    let str1 =e.data;
    console.log(str1);
   let str2= Array.from(str1);
   let rev=str2.reverse();
   console.log(rev);

}