
//get current year and last modification
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];


const selectElement = document.getElementById("productname"); // Replace with your actual select element id

function populateDropdown(products) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

populateDropdown(products);





// reviews.html load count
let numVisits = localStorage.getItem('reviewsnumVisits');

if (numVisits === null) {
    // Initialize numVisits to 0 if it's the first visit
    numVisits = 0;
} else {
    // Convert numVisits to a number before incrementing
    numVisits = Number(numVisits);
}

numVisits++;

localStorage.setItem("reviewsnumVisits", numVisits);

console.log(`Number of visits: ${numVisits}`);