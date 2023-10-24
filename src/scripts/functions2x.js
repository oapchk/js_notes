//function expression -> przypisanie deklaraci funckji do zmennej
// deklaracja po rowna sie

const doSmth = () => {};
const doSmth1 = function () {};
const doSmth2 = function name() {}; // nie robimy tak

//parametry
const x = () => {};
const x1 = (a) => {}; // niezgodne z guideline
const x2 = (a, b) => {};

//ciało funckji
const x3 = () => {};
const x4 = () => 42; // implicit return (niejawne)

////////////fn max, ktora zwraca najwieszy podany argument
////////////
const max = (...digits) => {
  // nie wiemy ile argumentow, trzeba je skonwertowac na tablice spread operatorem
  let highest = digits[0];

  for (const digit of digits.slice(1)) {
    if (digit > highest) {
      highest = digit;
    }
  }
  return highest;
};

// const max2 = (...digits) => digit.sort((a,b)=> a-b).at(-1);

console.log(max(155, 8, 90, 776, 18, 3, 5, 57));

//przyjmij obiekt z imieniem i wikiem i zroc nowy objekt w ktorym bedzie jeszcze klucz active

// const changeStatus = ({name, age}) => ({name, age, status: 'active'});
const changeStatus = (person) => ({ ...person, status: "active" });

const user = { name: "Janusz", age: 34 };
console.log(changeStatus(user));

// arrow fn jest leksykalny. nie maja tablicy argument
//
