// const user = {
//   name: "Przemysław",
//   score: 0,
//   updateScore(newScore) {
//     user.score += newScore;
//   },
// };

// function user(name) {
//   return {
//     name: name,
//     score: 0,
//     updateScore(newScore) {
//       this.score += newScore;
//     },
//   };
// }

// user1 = user("Jarosław");
// user2 = user("Przemysław");
// user1.updateScore(666);
// console.log(user1);
// console.log(user2);

function User(name) {
  this.name = name;
  this.score = 0;
}

User.prototype.updateScore = function (newScore) {
  this.score += newScore;
};

// const user = new User("Jarosław");
// user.updateScore(666);
// console.log(user);

Array.prototype.pawelFilter = function (cb) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

// const arr = [1, 2, 3];
// const result = arr.pawelFilter((element, idx, arr) => element > 2);
// console.log(result);

// function pawelFilter(data) {
//   const res = [];

//   for (let i = 0; i< data.length; i++){
//     if (data[i] > 2){
//       res.push(data[i])
//     }
//   }
// }return res;

// String.prototype.title = function () {
//   return this[0].toUpperCase() + this.slice(1);
// };

/////////////////////////////////////
//-------------myMap--------------//

Array.prototype.myMap = function (fn) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push.apply(fn(this[i], i, this));
  }
  return temp;
};
