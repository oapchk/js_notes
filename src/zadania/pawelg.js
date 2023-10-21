const rock_bands = [
  {
    name: "The Beatles",
    best_album: "Sgt. Pepper's Lonely Hearts Club Band",
    members: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    most_popular_song: "Let It Be",
    years_active: "1960-1970",
  },
  {
    name: "Led Zeppelin",
    best_album: "IV (Led Zeppelin IV)",
    members: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
    most_popular_song: "Stairway to Heaven",
    years_active: "1968-1980",
  },
  {
    name: "Queen",
    best_album: "A Night at the Opera",
    members: ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
    most_popular_song: "Bohemian Rhapsody",
    years_active: "1970-1991",
  },
  {
    name: "The Rolling Stones",
    best_album: "Exile on Main St.",
    members: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    most_popular_song: "(I Can't Get No) Satisfaction",
    years_active: "Since 1962",
  },
  {
    name: "Pink Floyd",
    best_album: "The Dark Side of the Moon",
    members: ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
    most_popular_song: "Wish You Were Here",
    years_active: "1965-1995",
  },
  {
    name: "The Who",
    best_album: "Who's Next",
    members: [
      "Roger Daltrey",
      "Pete Townshend",
      "John Entwistle",
      "Keith Moon",
    ],
    most_popular_song: "Baba O'Riley",
    years_active: "Since 1964",
  },
  {
    name: "U2",
    best_album: "The Joshua Tree",
    members: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
    most_popular_song: "With or Without You",
    years_active: "Since 1976",
  },
  {
    name: "Nirvana",
    best_album: "Nevermind",
    members: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
    most_popular_song: "Smells Like Teen Spirit",
    years_active: "1987-1994",
  },
  {
    name: "The Eagles",
    best_album: "Hotel California",
    members: [
      "Don Henley",
      "Glenn Frey",
      "Joe Walsh",
      "Timothy B. Schmit",
      "Don Felder",
    ],
    most_popular_song: "Hotel California",
    years_active: "1971-1980, 1994-2016",
  },
  {
    name: "The Jimi Hendrix Experience",
    best_album: "Are You Experienced",
    members: ["Jimi Hendrix", "Noel Redding", "Mitch Mitchell"],
    most_popular_song: "Purple Haze",
    years_active: "1966-1970",
  },
  {
    name: "AC/DC",
    best_album: "Back in Black",
    members: ["Angus Young", "Malcolm Young", "Bon Scott", "Brian Johnson"],
    most_popular_song: "Highway to Hell",
    years_active: "Since 1973",
  },
  {
    name: "The Doors",
    best_album: "The Doors (debut album)",
    members: ["Jim Morrison", "Ray Manzarek", "Robby Krieger", "John Densmore"],
    most_popular_song: "Light My Fire",
    years_active: "1965-1973",
  },
];

//3. Policz ilu artystów we wszystkich kapelach miało/ma na imie John

let count = 0;
rock_bands.forEach((band) => {
  band.members.forEach((member) => {
    if (member.toLowerCase().includes("john")) count++;
  });
});
console.log(count);

// 1 Jakie zespoły rockowe były aktywne w latach 80. XX wieku,
// zgodnie z informacjami dostępnymi w liście "rock_bands"?
const activeIn80s = rock_bands.filter(
  (band) =>
    band.years_active.includes("198") || band.years_active.includes("Since")
);

activeIn80s.forEach((band) => {
  console.log(band.name);
});

// const activeIn80sNames = rock_bands
//   .filter((band) => band.years_active.includes("198") || band.years_active.includes("Since"))
//   .map((band) => band.name);
// console.log(activeIn80sNames);

//2. Które zespoły powielają nazwę kapeli "name" w  albumie "best_album ?
const albumNameDuplicate = rock_bands.filter((band) =>
  band.best_album.includes(band.name)
);

albumNameDuplicate.forEach((band) => {
  console.log(band.name);
});

// const albumNameDuplicate = rock_bands
//   .filter((band) => band.best_album.includes(band.name))
//   .map((band) => band.name);
// console.log(albumNameDuplicate);

// // // 1 Jakie zespoły rockowe były aktywne w latach 80. XX wieku,
// // // zgodnie z informacjami dostępnymi w liście "rock_bands"?

// // const activeIn80s = rock_bands.filter((band) => {
// //   if (band.years_active.includes("198") || band.years_active.includes("Since"))
// //     return band;
// // });
// // for (let i =0; i< activeIn80s.length; i++){
// // console.log(activeIn80s[i].name);}

// const activeIn80s = rock_bands.filter((band) => band.years_active.includes("198") || band.years_active.includes("Since"));

// activeIn80s.forEach((band) => {
//   console.log(band.name);
// });

// // const albumNameDuplicate = rock_bands.filter((band) => band.best_album.includes(band.name));

// // albumNameDuplicate.forEach((band) => {
// //   console.log(band.name);
// // });

// //2. Które zespoły powielają nazwę kapeli "name" w  albumie "best_album ?
// // const albumNameDuplicate = rock_bands.filter((band) => {
// //   if (band.best_album.includes(band.name)){ return band;
// // }});

// // for(let i =0; i < albumNameDuplicate.length; i++)
// // {
// //     console.log(albumNameDuplicate[i].name);
// // }
