var res=fetch("https://restcountries.com/v3.1/all");
var final =res.then((data)=>data.json());
console.log(final);
var finaldata=final.then((data)=>data.json());
console.log(dfinal)