// async function foo() {
//   var res = await fetch("https://restcountries.com/v3.1/all");
//   var res1 = await res.json();
//   console.log(res1);
// }
// foo();

// //example--2

// async function foo1() {
//   try {
//     var res = await bar();
//   } catch (error) {
//     console.log(error);
//   }
// }
// foo1();
// function bar() {
//   return new Promise((resolve, reject) => {
//     reject("this is rejectedd");
//   });
// }

//example  -3
// Define a function 'mul' that returns a Promise to multiply a number by 2 after a 5-second delay.
function mul(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 5000);
  });
}

// // Define an 'async' function 'fo'.
// async function fo() {
//   // Call 'mul' with the argument 5 and 'await' for the result.
//   var num1 = await mul(5);
//   console.log(num1); // Log the result after the Promise resolves (10).

//   // Call 'mul' with the result from the previous operation and 'await' for the new result.
//   var num2 = await mul(num1);
//   console.log(num2); // Log the result after the Promise resolves (20).

//   // Call 'mul' with the result from the previous operation and 'await' for the new result.
//   var num3 = await mul(num2);
//   console.log(num3); // Log the result after the Promise resolves (40).
// }

// // Call the 'fo' function, which will execute the asynchronous code.
// fo();

// Define an 'async' function 'fetchCountriesData'.
async function fetchCountriesData() {
  try {
    // Attempt to fetch data from the specified URL.
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Parse the response data as JSON.
    const data1 = await response.json();

    // Log the entire 'data1' object.
    console.log(data1);

    // Iterate through each country's data in 'data1' and log relevant information.
    for (let i = 0; i < data1.length; i++) {
      const country = data1[i];
      console.log(
        `Country name: ${country.name.common} Capital: ${country.capital} Flag: ${country.flags.svg}`
      );
      // You can uncomment and log additional information as needed.
    }
  } catch (error) {
    // If an error occurs during the try block, catch and log the error.
    console.error("An error occurred:", error);
  }
}

// Call the 'fetchCountriesData' function, which will execute the asynchronous code.
fetchCountriesData();
