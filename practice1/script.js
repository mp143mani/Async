
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
        console.log('You clicked the button!');    
    }, 2000);



setTimeout(function timeout() {
    console.log("varisu!");
}, 10000);

setTimeout(function timeout() {
    console.log("thunivu!");
},7000);
console.log("Welcome to loupe.");
console.log("dingi.");

//=====================================================================================



//call back function

//basic example 1
var arr=[1,2,3,4,5]
var res=arr.map((ele)=>ele*2);
console.log(res);

//basic example 2
//setTimeout(  /* this is an call back function  ()=>console.log("huguidgwuid")  */  ,3800);


//exam ple 3
function fo(str,cb){
    console.log("hi hari mani");
    cb(str)
}

function ar(str){
console.log(`hello ${str}`);
}
fo("vaa nanba",ar);


//example 4
