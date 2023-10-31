//promise.all()
var p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{
            resolve("your are selected")
        },3000);
    }
    else{
        setTimeout((resolve,reject)=>{
            reject("you will be rejected")
        },1000);
    }
});


var p2=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{
            resolve("your are2 selected")
        },1000);
    }
    else{
        setTimeout((resolve,reject)=>{
            reject("you will be2 rejected")
        },2000);
    }
});



var p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{
            resolve("your are3 selected")
        },5000);
    }
    else{
        setTimeout((resolve,reject)=>{
            reject("you will be3 rejected")
        },3000);
    }
});
Promise.allSettled([p1,p2,p3])
.then((data)=>console.log(data))
.catch((error)=>console.log(error));













//chain of promise: resolved state
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






//chain of promise: rejected state
function mul(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(5*num),2000);
    })
}

function failure(num){
return new Promise((resolve,reject)=>{
    reject(num*2+"this is rejected")
})
}
mul(5).then((data)=>{
    console.log(data);//25
    return mul(data);// mul(25)->
}).then((data1)=>{
    console.log(data1);
    return failure(data1);
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error))
// failure().catch((error)=>console.log(error))