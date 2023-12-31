const x = [1, 2, 3, 4];

//spread operator rozprasza tablice
//...x=> 1,2,3,4=> nie bedzie działac, bo brakuje nawiasów
//[...x]=> [1,2,3,4] (shallow copy)kopia na jednym poziomie
//[...x, ...x] => [1,2,3,4,1,2,3,4]
//[x,x] => [[1,2,3,4], [1,2,3,4]]

//rest operator with destructuring
const [a, b, ...rest] = x; // a=1,b=2, rest=[3,4]

function name(a, b, ...digits) {} // a=1,b=2, digits=[3,4,5,6]
name(1, 2, 3, 4, 5, 6);
