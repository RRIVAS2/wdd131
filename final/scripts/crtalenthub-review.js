
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





//get current year and last modification
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;