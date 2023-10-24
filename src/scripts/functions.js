function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
// console.log(result);
// console.log(sum(1, 2));

// napisz funckje ktora zwraca "Czesc Janusz", przy czym Janusz to parametr
function greeting(name) {
  return "Cześć, " + name;
}

console.log(greeting("Janusz"));

// function getDayName(day) {
//   if (day === 0) {
//     return "niedziela";
//   } else if (day === 1) {
//     return "poniedzialek";
//   }
// }

// console.log(getDayName(0));

function getDayName(day) {
  return ["nd", "pn", "wt"][day];
}
console.log(getDayName(0));

//wylosuj 6 liczb bez powtorzen z zakresu 1-49

function drawDigits() {
  const temp = [];

  while (temp.length < 6) {
    const digit = Math.floor(Math.random() * 48 + 1);
    if (!temp.includes(digit)) {
      temp.push(digit);
    }
  }

  return temp;
}

console.log(drawDigits());

//napisz funkcje do zwracania intersection(przeciecie czesc wspolna) dwoch tablic
// algorytm postepowania

// 1. stwrorz funkcje, ktora przyjmuje 2 par
//stworz pusta tabl do zapisania powtarzajcych si eelementow
//3. przeiteruja po pierwszej tablicy for
//4. Sprawdz w iteracji kazdy element czy jest w drugije - incluse
//5 jezeli jesy to dodaj do pustej tablicy push
// 6 po iteracji zwroc tab z pkt 2

function intersection(arr1, arr2) {
  const result = [];
  // for (const item of arr1) {

  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4], [2, 4, 11]));

// fn myLord ktora ma zwracac losowo: Witaj moj Panie; Co Jeszcze moge dla Ciebie zrobi; Pieknie dzis wygladasz;

function myLord() {
  const text = [
    "Witaj moj Panie!",
    "Co Jeszcze moge dla Ciebie zrobic?",
    "Pieknie dzis wygladasz!",
  ];
  return text[Math.round(Math.random() * (text.length - 1))];
}

console.log(myLord());

//////PALINDROM
// const isPalindrome = (text) => text.toLowerCase()===text.toLowerCase().split("").reverse().join("")

// [1,2,3,4].reduce((acc,ce, index,arr)=> acc + ce,5)
// Array.prototype.myReduce = function (cb, initialValue = undefined) {
//   let acc = initialValue ? initialValue : this[0];

//   for (let i = initialValue ? 0 : 1; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this)
//   }
//   return acc;
// };

const props = { name: "Janusz", age: 34 };
function sentence({ name, age }) {
  return `Mam na imię ${name} i mam lat ${age}.`;
}

sentence(props);

//druga wersja gorsza
// function sentence({ name: firstName = "Janusz", age: goldenAge = 42 } = {}) {
//   return `Mam na imię ${name} i mam lat ${age}.`;
// }

// sentence(props);
