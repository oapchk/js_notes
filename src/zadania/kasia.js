const filmy = [
  {
    tytul: "Avengers: Endgame",
    rezyser: "Anthony i Joe Russo",
    rokProdukcji: 2019,
    gatunek: "Akcja/Sci-Fi",
    ocena: 8.4,
  },
  {
    tytul: "Inception",
    rezyser: "Christopher Nolan",
    rokProdukcji: 2010,
    gatunek: "Sci-Fi/Thriller",
    ocena: 8.8,
  },
  {
    tytul: "The Dark Knight",
    rezyser: "Christopher Nolan",
    rokProdukcji: 2008,
    gatunek: "Akcja/Dramat",
    ocena: 9.0,
  },
  {
    tytul: "Pulp Fiction",
    rezyser: "Quentin Tarantino",
    rokProdukcji: 1994,
    gatunek: "Kryminał/Dramat",
    ocena: 8.9,
  },
  {
    tytul: "The Shawshank Redemption",
    rezyser: "Frank Darabont",
    rokProdukcji: 1994,
    gatunek: "Dramat",
    ocena: 9.3,
  },
  {
    tytul: "Titanic",
    rezyser: "James Cameron",
    rokProdukcji: 1997,
    gatunek: "Romans/Dramat",
    ocena: 7.8,
  },
  {
    tytul: "Jurassic Park",
    rezyser: "Steven Spielberg",
    rokProdukcji: 1993,
    gatunek: "Sci-Fi/Przygodowy",
    ocena: 8.1,
  },
  {
    tytul: "Gladiator",
    rezyser: "Ridley Scott",
    rokProdukcji: 2000,
    gatunek: "Akcja/Dramat",
    ocena: 8.5,
  },
  {
    tytul: "The Matrix",
    rezyser: "The Wachowskis",
    rokProdukcji: 1999,
    gatunek: "Akcja/Sci-Fi",
    ocena: 8.7,
  },
  {
    tytul: "Forrest Gump",
    rezyser: "Robert Zemeckis",
    rokProdukcji: 1994,
    gatunek: "Dramat/Komedia",
    ocena: 8.8,
  },
  {
    tytul: "The Lord of the Rings: The Fellowship of the Ring",
    rezyser: "Peter Jackson",
    rokProdukcji: 2001,
    gatunek: "Fantasy/Przygodowy",
    ocena: 8.8,
  },
  {
    tytul: "Fight Club",
    rezyser: "David Fincher",
    rokProdukcji: 1999,
    gatunek: "Dramat/Thriller",
    ocena: 8.8,
  },
  {
    tytul: "The Godfather",
    rezyser: "Francis Ford Coppola",
    rokProdukcji: 1972,
    gatunek: "Dramat/Kryminał",
    ocena: 9.2,
  },
  {
    tytul: "Star Wars: Episode IV - A New Hope",
    rezyser: "George Lucas",
    rokProdukcji: 1977,
    gatunek: "Sci-Fi/Przygodowy",
    ocena: 8.6,
  },
  {
    tytul: "The Silence of the Lambs",
    rezyser: "Jonathan Demme",
    rokProdukcji: 1991,
    gatunek: "Kryminał/Thriller",
    ocena: 8.6,
  },
  {
    tytul: "E.T. the Extra-Terrestrial",
    rezyser: "Steven Spielberg",
    rokProdukcji: 1982,
    gatunek: "Sci-Fi/Fantasy",
    ocena: 7.8,
  },
  {
    tytul: "The Revenant",
    rezyser: "Alejandro González Iñárritu",
    rokProdukcji: 2015,
    gatunek: "Przygodowy/Dramat",
    ocena: 8.0,
  },
  {
    tytul: "The Social Network",
    rezyser: "David Fincher",
    rokProdukcji: 2010,
    gatunek: "Dramat/Biograficzny",
    ocena: 7.7,
  },
  {
    tytul: "Avatar",
    rezyser: "James Cameron",
    rokProdukcji: 2009,
    gatunek: "Akcja/Sci-Fi",
    ocena: 7.8,
  },
  {
    tytul: "The Grand Budapest Hotel",
    rezyser: "Wes Anderson",
    rokProdukcji: 2014,
    gatunek: "Komedia/Dramat",
    ocena: 8.1,
  },
];

// console.log("pytanie 1: określ średnią długość tytułów filmów");

const countAvgTitleLength =
  filmy.reduce((acc, title) => acc + title.tytul.length, 0) / filmy.length;
console.log(countAvgTitleLength);

//   "pytanie 2: sprawdź czy na tej liście są co najmniej dwa filmy od tego samego reżysera"
const directorsList = filmy.map((director) => director.rezyser);
const isDuplicated = directorsList.some(
  (director, id) => directorsList.indexOf(director) !== id
);
console.log(isDuplicated);

// console.log("pytanie 3: ile filmów powstało między 2000 a 2015 rokiem");

const countMovies = filmy.filter(
  (film) => film.rokProdukcji <= 2015 && film.rokProdukcji >= 2000
);

console.log(countMovies.length);
