//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3876b82fd40f8117b5daa75e0f9134ea
async function getdata(){
    let res=await fetch("https://restcountries.com/v3.1/all");
    let result=await res.json();
    for(var i=0;i<result.length;i++){
        var name=result[i].name.common;
        var latlon=result[i].latlng;//[13.33,45.3]
        wd(name,...latlon); //wd(13.33,45.3)//... mean by  speard operation, because this is  result is should be an array//  
    }

}

getdata();

//to pass the first function data into  second function
async function wd(name,lat,lon){
let res1= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`)
//$ symbol ussing in link, first function data pass through the link(line 15)
let res2=await res1.json();
console.log(`${name}${res2.main.temp}`);
}
