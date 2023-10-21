let countries = [
  {
    country: "Poland",
    capital: "Warsaw",
    language: "Polish",
    continent: "Europe",
  },
  {
    country: "United States",
    capital: "Washington, D.C.",
    language: "English",
    continent: "North America",
  },
  {
    country: "China",
    capital: "Beijing",
    language: "Chinese",
    continent: "Asia",
  },
  {
    country: "Brazil",
    capital: "Brasília",
    language: "Portuguese",
    continent: "South America",
  },
  {
    country: "Egypt",
    capital: "Cairo",
    language: "Arabic",
    continent: "Africa",
  },
  {
    country: "Australia",
    capital: "Canberra",
    language: "English",
    continent: "Australia",
  },
  {
    country: "Russia",
    capital: "Moscow",
    language: "Russian",
    continent: "Europe",
  },
  {
    country: "Kenya",
    capital: "Nairobi",
    language: "Swahili",
    continent: "Africa",
  },
  {
    country: "India",
    capital: "New Delhi",
    language: "Hindi",
    continent: "Asia",
  },
  {
    country: "Canada",
    capital: "Ottawa",
    language: "English",
    continent: "North America",
  },
  {
    country: "Argentina",
    capital: "Buenos Aires",
    language: "Spanish",
    continent: "South America",
  },
  {
    country: "Norway",
    capital: "Oslo",
    language: "Norwegian",
    continent: "Europe",
  },
  {
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    continent: "Asia",
  },
  {
    country: "Portugal",
    capital: "Lisbon",
    language: "portuguese",
    continent: "Europe",
  },
];

// Zadanie 1.
// Znajdź wszystkie kraje, w których językiem urzędowym jest angielski oraz portugalski.

const languageIsEngOrPt = [];

for (const element of countries) {
  if (["portuguese", "english"].includes(element.language.toLowerCase())) {
    languageIsEngOrPt.push(element.country);
  }
}
console.log(languageIsEngOrPt);

//////////////// Zadanie 2./////////////////////
// Ile jest państw, które znajdują się w Afryce?

let count = 0;
countries.forEach((item) => {
  if (item.continent.toLowerCase().includes("africa")) count++;
});

console.log(count);

/////////////////////////////// Zadanie 3./////////////////////////////////////
// Znajdź wszystkie kraje, których stolicą jest Nairobi, Canberra oraz Warszawa.

const findCountry = countries
  .filter((element) =>
    ["warszawa", "warsaw", "nairobi", "canberra"].includes(
      element.capital.toLowerCase()
    )
  )
  .map((element) => element.country);

console.log(findCountry);

// let countryInAfrica = countries.filter((element) => {
//  return element.continent.toLowerCase().includes("africa");
// });

// console.log(countryInAfrica.length);
