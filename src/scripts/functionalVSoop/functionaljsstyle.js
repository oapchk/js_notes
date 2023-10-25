// speed, maxSpeed, engine
//speedUp, slowDown, startEngine,stopEngine

//factory function
function Auto(brand, maxSpeed) {
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.brand = brand;
  this.engine = false;
}
//paradygmat funckcyjny

Auto.prototype.startEngine = function () {
  if (!this.engine) {
    this.engine = true;
    console.log("Silnik odpalony");
  } else {
    console.log("Silnik juz byl odpalony");
  }
};

Auto.prototype.stopEngine = function () {
  if (this.speed === 0) {
    this.engine = false;
    console.log("Silnik zgaszony");
  } else {
    console.log("Zatrzymaj fure!!!!!!!!");
  }
};

Auto.prototype.speedUp = function (amount) {
  if (this.engine) {
    this.speed = Math.min(this.speed + amount, this.maxSpeed);
    console.log("Jedziesz z predkoscia ${this.speed}");
  } else {
    console.log("odpal silnik ziomus");
  }
};

Auto.prototype.slowDown = function (amount) {
  this.speed = Math.max(this.speed - amount, 0);
  console.log("Jedziesz z predkoscia ${this.speed}");
};

const bmw = new Auto("bmw", 160);
const toyota = new Auto("toyota", 198);

bmw.speedUp(100);
bmw.startEngine();
bmw.speedUp(50);
bmw.speedUp(100);
bmw.speedUp(100);
bmw.stopEngine();
bmw.slowDown(100);
bmw.slowDown(100);
bmw.slowDown(100);
bmw.stopEngine();
