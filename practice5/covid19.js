// Create a <div> element and style it
var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "100px";

// Create an <input> element and set its attributes and styles
var input = document.createElement("input");
input.setAttribute("type", "text");
input.style.width = "50%";
input.id = "countryname";

// Create a <button> element and set its attributes and styles
var button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Click me"; // Use textContent for setting text
button.style.margin = "5px";
button.addEventListener("click", getdata);

// Create a <div> element for displaying the active cases and set its styles
var active = document.createElement("div");
active.style.fontSize = "32px";
active.style.fontFamily = "Arial";

// Append the elements to the <div> and the <div> to the <body>
div.append(input, button, active);
document.body.append(div);

async function getdata() {
  let res = document.getElementById("countryname").value;
  console.log(res);

  try {
    // Fetch COVID-19 data for the specified country
    let response = await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
    let data = await response.json();
    console.log(data);

    // Calculate the index of the last data entry
    let index = data.length - 1;

    // Display the active cases in the <div>
    active.innerHTML = `Active: ${data[index].Active}`;
  } catch (error) {
    console.error(error);
  }
}
