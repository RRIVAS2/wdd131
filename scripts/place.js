
//get current year and last modification
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


//Compute windchill
function calculateWindChillCelsius(temperatureCelsius, windSpeedKph) {
    return 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKph, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKph, 0.16));
}


let temperatureCelsius = 5; // Temperature in Celsius
let windSpeedKph = 10; // Wind speed in km/h

if (temperatureCelsius <= 10 && windSpeedKph > 4.8) {
  document.getElementById("windchill").innerHTML = `${calculateWindChillCelsius(temperatureCelsius, windSpeedKph).toFixed(1)} °C`;
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}
