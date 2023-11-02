// Create a container div element with the class "container".
var container = document.createElement("div");
container.className = "container ";

// Create a row div element with classes "row" and "m-3".
var row = document.createElement("div");
row.classList.add("row", "m-3");

// Append the row to the container.
container.append(row);

// Fetch data from the API and handle it using promises.
var res = fetch("https://restcountries.com/v3.1/all");
res
  .then((data) => data.json())
  .then((data1) => {
    // Call the foo function to display country data.
    foo(data1);
  })
  .catch((error) => {
    console.error("Error fetching data: " + error);
  });

// Define the foo function to display country data.
function foo(data1) {
  for (var i = 0; i < data1.length; i++) {
    // Create a card for each country.
    var card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
    <div class="card border-primary mb-3" style="width: 18rem; ">
    <img src="${data1[i].flags.svg}" class="card-img-top" style="width: 100%" alt="country flags">
    <div class="card-body ">
      <h5 class="card-title">${data1[i].name.common}</h5>
      <p class="card-text">${data1[i].capital}</p>
    </div>
  </div>
  
    `;

    // Append the card to the row.
    row.appendChild(card);
  }

  // Append the container to the document body.
  document.body.appendChild(container);
}
