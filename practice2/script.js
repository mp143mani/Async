
// //example  1
// var p =new Promise((resolve,reject)=>{
//     resolve("this is fullfilled");
//     reject("this is rejected");
// });
// console.log(p);




// //example 2
// var k =new Promise((resolve,reject)=>{
//     var age=parseInt(prompt("Enter your age"));
//     // var age =90
//     if(age>=18){
//         resolve("your eligible to vote")
//     }
//     else{
//         reject("your not eligible vote")
//     }
// });
// console.log(k);




//example  3
// function foo(){
//     return new Promise((resolve,reject)=>{
//          reject("this is rejected/failed")
//         resolve("this is resolved");
//     });
// }
// console.log(foo());  //  return the promise object
// foo().then((data)=>console.log(data))
// .catch((err)=>console.log(err));


//new -- mean that object



//example  4  multiple asynchronous execution 
function foo(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num * 2), 4000);
      setTimeout(() => reject(num * 2 + " this is rejected"), 1000);
    });
  }
  console.log(foo());
  foo(5)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  