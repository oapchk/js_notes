// Redeklaracja zmiennych
//Deklaracja zmiennej to stworzenie jej za pomoca np. let x;

// var x1 = 42;
// var x1 = 666;

// let x2 = 42;
// let x2 = 666; // nie mozna redeklarowac, blad

// const x3 = 42;
// const x3 = 666; // nie mozna redeklarowac, blad

// Reinicjalizacja
// Przypisanie nowej wartości do istniejącej zmiennej np. x = 42;

// var x1 = 42;
// x1 = 66;

// let x2 = 42;
// x2 = 66;

// const x3 = 42;
// x3 = 66; // const nie mozna reinicjalizować

//Hoisting
//Przenoszenie deklaracji zmiennych, deklaracji funkcji nazwanych, deklaracji klas na górę aktualnie przetwarzanego zasiegu. TDZ - temporary death zone (tymczasowa strefa śmierci).

function doSmthAwesome() {
  var z1;
  console.log(z1);
  z1 = 42;
}

doSmthAwesome();

//Scope - zasięg
//Widoczność, dostępnośc identyfikatorów (nazwy zmiennych, funkcji i klas)
//- global - wszedzie jest coś dostępne
//- local - dostępne tylko w lokalnym zasięgu
//- function scope - tworzony przez ciało funkcji
//- block scope - tworzony przez blok, dowolna para dwóch klamerek

function doSmth() {
  var x1 = 42;
  let x2 = 42;
  const x3 = 42;
}

doSmth();
//console.log(x1, x2, x3); sa niedostepne w aktulanym scope, bo sa zadeklarowane wewnatrz funkcji

// if (true) {
//   var x1 = 42;
//   let x2 = 42;
//   const x3 = 42;
// }

// console.log(x1);
// console.log(x1, x2, x3);

// let x = 42;
// function doSmthMagic() {
//   x = 666; // kiedy nie ma deklaracji zmiennej to szuka w zasiegu otaczajacym wyzej
//let x =666; // kiedy jest deklaracja to jest tworzona nowa zmienn a ta wyzej ni jest uzywana
//   console.log(x);
// }

// doSmthMagic();
// console.log(x);

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
