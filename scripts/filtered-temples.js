const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
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
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg"
  },
  {
    templeName: "Nashville Tennessee",
    location: "Nashville, Tennessee",
    dedicated: "2000, May, 21",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-38227-main.jpg"
  },
  {
    templeName: "Preston England",
    location: "Preston, England",
    dedicated: "1998, June, 7-10",
    area: 69630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
  }
];

let templeFilters = {
    "Home": () => true,
    "Old": temple => parseInt(temple.dedicated.split(",")[0]) < 1900,
    "New": temple => parseInt(temple.dedicated.split(",")[0]) > 2000,
    "Large": temple => temple.area > 90_000,
    "Small": temple => temple.area < 10_000
};

const links = navigation.querySelectorAll("a");
links.forEach(link => {
    //Precomputes Data for caching
    let filteredTemples = temples.filter(templeFilters[link.textContent]);

    link.addEventListener("click", (event) => {
        createTempleCards(filteredTemples);
    })
});

const gallery = document.querySelector(".gallery")
function createTempleCards(temples) {
    gallery.innerHTML = temples.map(temple => `
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height"300">
            <figcaption>
                <h2>${temple.templeName}</h2>
                <strong>Location:</strong> ${temple.location}<br>
                <strong>Dedicated:</strong> ${temple.dedicated}<br>
                <strong>Area:</strong> ${temple.area}
            </figcaption>
        </figure>
    `).join('');
}

createTempleCards(temples)