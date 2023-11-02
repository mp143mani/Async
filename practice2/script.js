
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
// Define a function 'foo' that returns a Promise.
// function foo(){
//   return new Promise((resolve, reject) => {
//       resolve("this is resolved"); // This line is executed and the Promise is resolved.
//       reject("this is rejected/failed"); // This line is ignored because the Promise was already resolved.
//   });
// }

// // Log the Promise object returned by 'foo'. This will not trigger the 'then' or 'catch' handlers immediately.
// console.log(foo());

// // Call 'foo' and attach a 'then' handler to handle the resolved state and log the data.
// foo()
// .then((data) => console.log(data)) // The 'then' handler logs "this is resolved" as the Promise is already resolved.
// .catch((err) => console.log(err));  // The 'catch' handler is not executed because there was no rejection.




// Define a function 'foo' that returns a Promise, immediately rejecting with a message.
// function foo(){
//   return new Promise((resolve, reject) => {
//       reject("this is rejected/failed");
//       resolve("this is resolved"); // This line is not executed because of the preceding 'reject'.
//   });
// }

// // Log the Promise object returned by 'foo'. This will not trigger the 'then' or 'catch' handlers immediately.
// console.log(foo());

// // Call 'foo' and attach a 'then' handler to handle the resolved state and log the data.
// foo()
// .then((data) => console.log(data)) // This handler is skipped because the Promise was rejected.
// .catch((err) => console.log(err));  // The 'catch' handler is executed to log the rejection message.



//new -- mean that object



//example  4  multiple asynchronous execution 
// Define a function 'foo' that returns a Promise with both resolve and reject callbacks.
function foo(num) {
  return new Promise((resolve, reject) => {
    // The resolve callback is set to execute after 1000ms (1 second).
    setTimeout(() => resolve(num * 2 + " this is resolved"), 1000);
    // The reject callback is set to execute after 500ms (0.5 seconds).
    setTimeout(() => reject(num * 2 + " this is rejected"), 500);
  });
}

// Log the Promise object returned by 'foo'. This will not trigger the 'then' or 'catch' handlers immediately.
console.log(foo());

// Call 'foo' with the argument 5 and attach a 'then' handler to handle the resolved state and log the data.
foo(5)
  .then((data) => console.log(data)) // The 'then' handler logs the resolved message.
  .catch((err) => console.log(err));  // The 'catch' handler logs the rejected message.
