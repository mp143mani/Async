
//example  1
var p =new Promise((resolve,reject)=>{
    resolve("this is fullfilled");
    reject("this is rejected");
});
console.log(p);




//example 2
var k =new Promise((resolve,reject)=>{
    var age=parseInt(prompt("Enter your age"));
    if(age>=18){
        resolve("your eligible to vote")
    }
    else{
        reject("your not eligible vote")
    }
});
console.log(k);




//example  3
function foo(){
    return new Promise((resolve,reject)=>{
        resolve("this is resolved");
         //reject("this is rejected/failed")
    });
}
// console.log(foo());
foo().then((data)=>console.log(data))
.catch((err)=>console.log(err));



//example  4
