async function foo() {
    var res = await fetch("https://restcountries.com/v3.1/all");
    var res1 = await res.json();
    console.log(res1);
}
foo()



//example--2

async function foo1() {
    try {
        console.log("hello world!!!");
        console.log("hello world!!!");
        console.log("hello world!!!");
        console.log("helloo world!!!");
        var res = await bar();
        console.log("hello");
        console.log("helloddddd world!!!");
    } catch (error) {
        console.log(error);
    }
}
foo1()
function bar() {
    return new Promise((resolve, reject) => {
        reject("this is rejectedd");
    });
}


//example  -3
function mul(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num*2),5000);
    })
}

async function fo(){
    var num1=await mul(5);
    console.log(num1);


    var num2=await mul(num1);
    console.log(num2);



    var num3=await mul(num2);
    console.log(num3);


}
fo()


/*இதற்க்கு  பதிலாக மேல உள்ள  example -3 யை  use  பண்ணிக்கலாம்   

// this program teach to previous class
function mul(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(5*num),2000);
    })
}
mul(5).then((data)=>{
    console.log(data);//25
    return mul(data);// mul(25)->
}).then((data1)=>{
    console.log(data1); //125
    return mul(data1); //mul(125)
}).then((data2)=>console.log(data2));

*/

