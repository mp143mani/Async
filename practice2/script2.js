// // //promise.all()
// var p1=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("your are selected")
//         },3000);
//     }
//     else{
//         setTimeout((resolve,reject)=>{
//             reject("you will be rejected")
//         },1000);
//     }
// });


// var p2=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("your are2 selected")
//         },1000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("you will be2 rejected")
//         },2000);
//     }
// });



// var p3=new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(()=>{
//             resolve("your are3 selected")
//         },5000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("you will be3 rejected")
//         },2000);
//     }
// });
// Promise.all([p1,p2,p3])
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));









// //promise.allsettled()
// var p1=new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(()=>{
//             resolve("your are selected")
//         },3000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("you will be rejected")
//         },1000);
//     }
// });


// var p2=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("your are2 selected")
//         },1000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("you will be2 rejected")
//         },2000);
//     }
// });



// var p3=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("your are3 selected")
//         },5000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("you will be3 rejected")
//         },3000);
//     }
// });
// Promise.allSettled([p1,p2,p3])
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));






// // //chain of promise: resolved state
// // Define a function 'multiplay' that returns a Promise to multiplaytiply a number by 5 after a 2-second delay.
// function multiplay(num){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(5 * num), 2000);
//     });
// }

// // Call 'multiplay' with the argument 50 and attach a 'then' handler.
// multiplay(50).then((data) => {
//     console.log(data); // Logs the result (250) after the delay.
//     return multiplay(data);  // Calls 'multiplay' with the result (250).
// }).then((data1) => {
//     console.log(data1); // Logs the result (1250) after the delay.
//     return multiplay(data1);  // Calls 'multiplay' with the result (1250).
// }).then((data2) => console.log(data2)); // Logs the final result (6250) after the delay.







// Define a function multiplay that returns a promise which resolves with the result of 5 times the input number after a 2-second delay.
function multiplay(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(5*num), 2000); // Resolves with 5 times the input number after 2 seconds.
    })
}

// Define a function failure that returns a promise which immediately rejects with an error message containing the input number.
function failure(num){
    return new Promise((resolve,reject)=>{
        reject(num*2 + " this isss rejected"); // Rejects with an error message.
    })
}

// Call the multiplay function with the argument 5 and then attach a .then() handler to the returned promise.
multiplay(5).then((data)=>{
    console.log(data); // Log the result (25) to the console.
    return multiplay(data); // Return a new promise by calling multiplay with the result (25).
}).then((data1)=>{
    console.log(data1); // Log the result (125) to the console.
    return failure(data1); // Return a new promise by calling failure with the result (125).
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error)); // Log the result or catch any errors that occurred in the promise chain.
