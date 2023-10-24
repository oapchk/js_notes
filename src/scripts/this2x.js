"use strict";

// zgodny ze standardami js; strict mode // jezeli piszesz w czystym js
// type="module" w index.html mozna dopisac do defer i async ale w XXIw sie tego nie robi :)

// quirks mode

//console.log(this); // najwyzszy obiekt w przegladarce czyli Window, wskazuje na globalny kontekst, this jest kontekstem
//jezeli uzyjesz strict mode bedzie undefinded
//zalezy od run time a nie compilation time
//this wskazuje na to co jest po kropce

function magic() {
  console.log(this);
}

magic.call({ age: 42 }); // zachowuje sie inaczej w zaleznosci od wywołania, jest dynamiczny// dynamiczny kontekst
magic.call({ age: Janusz }); // reczny sposob na specyfickacje thisa
// niewiadomo ile parametrow, po przecinku

magic.apply({ city: "Krakow" });
//apply przyjmuje kontekst
//mozna od razu wywolac ja z konteksetm, parametry przekazujemay jako tablice
// 2 param : this i tablica

const magic2 = magic.bind({ elo: 666 }); // tworzy drugi egzemplarz/instancje i zapisuje do magic2
//bind tworzy nowa funkcje ktora ma innegthisa niz wczesniej bind nie modyfikuje pierwotnej funkcji
magic2(); // nie wysolujesz zmiennej tylko to co jest w niej
// bind tworzy nowa funkcje calkowicie z kontekstem

//w klasach tworzy sie funcke bez slowa kluczowego function
class Click {
  constructor(selector) {
    this.selector = selector;
    this.counter = 0;
  }

  //   click() {
  //     const tagRef = document.querySelector(this.selector); // mamy ref do elementu htmla
  //     tagRef.addEventListener("click", (function (event) { // addEV ma thisa ktory wskauzje na zdrzenie
  //       event.preventDefault // blokuje natywne zachowanie eventów // wylaczenie zdarzenie obslugi przez przegladarke
  //       this.counter++; // odwolujesz sie do thisa tej funkcji // this wskazuje na zdarzenie callbacko
  //     }).bind(this));// zwrocił this z clicka
  //   }
  // }

  //////wersja 2 z ARROW FUNCTION

  click() {
    const tagRef = document.querySelector(this.selector);
    tagRef.addEventListener("click", (event) => {
      event.preventDefault;
      this.counter++;
      console.log(this.counter);
    });
  }
}

const tag = new Click('[type="submit"');
tag.click(); // to jest tak naprawde this.click
