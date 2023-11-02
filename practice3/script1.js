// -------------------------------------------------example1------------------------------------------------------
// var res=fetch("https://restcountries.com/v3.1/all");
// // console.log(res);
// var final=res.then((data)=>data.json());
// // console.log(final);
// final.then((data)=>console.log(data)).catch((error)=>console.log(error))




//-----------------example 2-----------------------------------------------------------------
//Question 1:
//Print the countries name and capital in console
//Print the flags of each countries in console


//Print the countries name and capital in console

var res = fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json()).then((data1) => {
        console.log(data1);
        for (var i = 0; i < data1.length; i++) {
            console.log(`Country name:${data1[i].name.common} Capital:${data1[i].capital} Flag:${data1[i].flags.svg}`);
            // console.log(`Country flag:${data1[i].name.common} Flag:${data1[i].flags.svg}`);
            // console.log(`Country independent:${data1[i].name.common} independent:${data1[i].independent}`);
            // console.log(`maps:${data1[i].name.common} maps:${data1[i].maps.googleMaps}`);
            // console.log(`time:${data1[i].name.common} time:${data1[i].timezones}`);

        }
    });
// console.log("countryname" + data.name)





///----------------------example3-------------------------
// var res=fetch("https://restcountries.com/v3.1/all")
// .then((data)=>data.json()).then((data1)=>console.log(data1));



