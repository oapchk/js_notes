const data = [
  {
    name: "pawel",
    city: "krakow",
    age: 38,
    hobbies: ["js", "python", "drugs"],
  },
  {
    name: "pawel",
    city: "Wroclaw",
    age: 37,
    hobbies: ["js", "drugs", "eat"],
  },
  {
    name: "pawel",
    city: "chelm",
    age: 24,
    hobbies: ["tennis", "sleep", "gym"],
  },
  {
    name: "iza",
    city: "warsaw",
    age: 28,
    hobbies: ["learning languages", "traveling", "js"],
  },
  {
    name: "marzena",
    city: "warsaw",
    age: 31,
    hobbies: ["js", "books", "travelling"],
  },
  {
    name: "adam",
    city: "pisz",
    age: 19,
    hobbies: ["guitar", "gym", "html"],
  },
  {
    name: "kamila",
    city: "gdynia",
    age: 37,
    hobbies: ["diving", "eating", "js"],
  },
  {
    name: "tomek",
    city: "zabrze",
    age: 40,
    hobbies: ["paintball"],
  },
  {
    name: "dawid",
    city: "tarnów",
    age: 23,
    hobbies: ["js", "beer", "css"],
  },
  {
    name: "olga",
    city: "warszawa",
    age: 34,
    hobbies: ["js", "cats", "swimming"],
  },
  {
    name: "kasia",
    city: "warszawa",
    age: 29,
    hobbies: ["programowanie", "sport"],
  },
  {
    name: "dominika",
    city: "warszawa",
    age: 40,
    hobbies: ["cycling", "dreaming", "car driving"],
  },
];

// console.log(data.length);

// Policz średnią wieku

function calculateAvgAge(people) {
  let sum = 0;

  // for (let i = 0; i < people.length; i++) {
  //     sum += people[i].age
  // }

  for (const person of people) {
    sum += person.age;
  }

  return sum / people.length;
}

function calculateAvgAge2(people) {
  const ages = people.map((person) => person.age); // tworzymy tablicę z wiekiem ludzi
  return ages.reduce((acc, age) => acc + age) / people.length; // na tablice odpalam reduce
}

// const calculateAvgAge3 = (people) =>
//   people.reduce((acc, person) => acc + person.age, 0) / people.length;

// const result = calculateAvgAge2(data);
// console.log(result);

///////////////////////////////////////////
///// policz średnią ludzi z Warszawy/////

function avgAgeWarsaw(items) {
  let sum = 0;
  let counter = 0;

  for (const item of items) {
    if (["warsaw", "warszawa"].includes(item.city.toLowerCase())) {
      sum += item.age;
      counter++;
    }
  }
  return sum / counter;
}

//////////////////////////////////
const avgAgeWarsaw2 = (items) => {
  //filtrowanie (usuwanie niepotrzebnych)
  const warsawItems = items.filter((item) =>
    ["warsaw", "warszawa"].includes(item.city.toLowerCase())
  );
  //transformacja dnych
  const ages = warsawItems.map((item) => item.age);
  //agregacja (sumowanie)
  return ages.reduce((acc, age) => acc + age) / ages.length;
};

//////////////////////////////////
const avgAgeWarsaw3 = (items) => {
  const ages = items
    .filter((item) => ["warsaw", "warszawa"].includes(item.city.toLowerCase()))
    .map((item) => item.age);

  return ages.reduce((acc, age) => acc + age) / ages.length;
};

// const r = avgAgeWarsaw2(data);
// console.log(r);

///////////////////////////////////////
//////czy wszyscy kochają js//////////

function isAllLoveJs(elements) {
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].hobbies.includes("js")) {
      return false;
    }
  }
  return true;
}

const isAllLoveJs2 = (elements) =>
  elements.every((element) => element.hobbies.includes("js"));

// const res = isAllLoveJs2(data);
// console.log(res);

//Sprawdz czy ktokolwiek kocha Phytona

function isAnybodyLovePython(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].hobbies.includes("python")) {
      return true;
    }
  }
  return false;
}

const isAnybodyLovePython2 = (items) =>
  items.some((item) => item.hobbies.includes("python"));

// const result = isAnybodyLovePython2(data);
// console.log(result);

//czy ktos z poza Warszawy ma wiece niz 30 lat

function isOLderThan30(people) {
  for (const person of people) {
    if (!["warsaw", "warszawa"].includes(person.city) && person.age > 30) {
      return true;
    }
  }
}

const isOLderThan302 = (people) =>
  people.some(
    (person) =>
      !(
        "warsaw" === person.city ||
        ("warszawa" === person.city && person.age > 30)
      )
  );

// const res = isOLderThan302(data);
// console.log(res);

///////////policz ile jest unikalnych hobby

const countHobbies = (people) => {
  const hobbies = [];

  for (const person of people) {
    for (const hobby of person.hobbies) {
      if (!hobbies.includes(hobby)) {
        hobbies.push(hobby);
      }
    }
  }
  return hobbies.length;
};

const countHobbies2 = (items) =>
  new Set(items.flatMap((item) => item.hobbies)).size;

const r = countHobbies2(data);
console.log(r);

// data
//   .slice(1)
//   .map((person) => "${id+1}. ${person.name[0].toUpperCase() + person.name.slice(1)}");
//   .join(', ')
