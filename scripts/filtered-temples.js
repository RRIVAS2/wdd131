let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "San Jose Costa Rica",
		location: "San Jose, Costa Rica",
		dedicated: "2000, June, 4",
		area: 10700,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/400x250/san-jose-costa-rica-temple-lds-83515-wallpaper.jpg"
	  },
	  {
		templeName: "Sao Paulo Brazil",
		location: "Sao Paulo, Brazil",
		dedicated: "1978, October, 30",
		area: 55000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
	  },
	  {
		templeName: "Concepcion Chile",
		location: "Concepcion, Chile",
		dedicated: "2018, October, 28",
		area: 23095,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/04-Concepcion-Chile-Temple-2114385.jpg"
	  },
  ];

  createTempleCard(temples);

  const homeLink = document.querySelector("#home");
  const oldLink = document.querySelector("#old");
  const newLink = document.querySelector("#new");
  const largeLink = document.querySelector("#large");
  const smallLink = document.querySelector("#small");


  homeLink.addEventListener("click", () => {
	createTempleCard(temples)
	});

  oldLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => {
	  // Parse the dedicated string into a Date object
	  const dedicatedDate = new Date(temple.dedicated.split(",").reverse().join(" "));
	  return dedicatedDate.getFullYear() < 1900;
	});
  
	if (filteredTemples.length === 0) {
	  // No temples found before 1900
	  document.querySelector(".res-grid").innerHTML = "There are no temples dedicated before 1900.";
	} else {
	  createTempleCard(filteredTemples);
	}
  });

  newLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => {
	  // Parse the dedicated string into a Date object
	  const dedicatedDate = new Date(temple.dedicated.split(",").reverse().join(" "));
	  return dedicatedDate.getFullYear() > 2000;
	});

	if (filteredTemples.length === 0) {
	  // No temples found after 2000
	  document.querySelector(".res-grid").innerHTML = "There are no temples dedicated before 1900.";
	} else {
	  createTempleCard(filteredTemples);
	}
  });

	largeLink.addEventListener("click", () => {
		createTempleCard(temples.filter(temple => temple.area > 90000)
		)});

	smallLink.addEventListener("click", () => {
		createTempleCard(temples.filter(temple => temple.area < 10000)
		)});




  function createTempleCard(filteredTemples) {
	document.querySelector(".res-grid").innerHTML = "";
	filteredTemples.forEach(temple => {
	  let card = document.createElement("section");
	  let name = document.createElement("h3");
	  let location = document.createElement("p");
	  let dedication = document.createElement("p");
	  let area = document.createElement("p");
	  let img = document.createElement("img");
  
	  name.textContent = temple.templeName;
	  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
	  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
	  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
	  img.setAttribute("src", temple.imageUrl);
	  img.setAttribute("alt", `${temple.templeName} Temple`);
	  img.setAttribute("loading", "lazy");
  
	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedication);
	  card.appendChild(area);
	  card.appendChild(img);
  
	  document.querySelector(".res-grid").appendChild(card);
	});
  }


