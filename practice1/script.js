
//B..Asynchronous-- time consuming( at a time)
setTimeout(()=>console.log("yellom avan seyal*******"),8000);
console.log("hi how are==============");
console.log("All is well-------------");



//=============================================================================================================
// call stack
let foo=()=>
{
    bar()
console.log("inside foo");
} 

let  bar=()=>
{
    console.log("inside bar");
}
foo()




    setTimeout(function timer() {
        console.log('You clickerrrd the button!');    
    }, 2000);



setTimeout(function timeout() {
    console.log("varisu!");
}, 10000);

setTimeout(function timeout() {
    console.log("thunivu!");
},7000);


//=====================================================================================



//call back function

//basic example 1
var arr=[1,2,3,4,55]
var res=arr.map((ele)=>ele*2);
console.log(res);

//basic example 2
//setTimeout(  /* this is an call back function  ()=>console.log("huguidgwuid")  */  ,3800);


//exam ple 3
// Define a function `fo` that takes two arguments: `str` and `cb`
function fo(str, cb) {
    // Log a message to the console
    console.log("hi hari mani");
  
    // Call the callback function `cb` and pass it the `str` argument
    cb(str);
  }
  
  // Define a function `ar` that takes one argument: `str`
  function ar(str) {
    // Log a message to the console using a template string
    console.log(`hello ${str}`);
  }
  
  // Call the `fo` function and pass the string "vaa nanba" as the first argument
  // and the `ar` function as the second argument
  console.log(fo("vaa nanba", ar));
  

//example 4
