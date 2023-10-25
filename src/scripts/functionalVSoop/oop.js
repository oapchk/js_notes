// speed, maxSpeed, engine
//speedUp, slowDown, startEngine,stopEngine

class Auto {
  constructor(brand, maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.brand = brand;
    this.engine = false;
  }
  startEngine() {
    if (!this.engine) {
      this.engine = true;
      console.log("Silnik odpalony");
    } else {
      console.log("Silnik juz byl odpalony");
    }
  }
  stopEngine() {
    if (this.speed === 0) {
      this.engine = false;
      console.log("Silnik zgaszony");
    } else {
      console.log("Zatrzymaj fure!!!!!!!!");
    }
  }
  speedUp(amount) {
    if (this.engine) {
      this.speed = Math.min(this.speed + amount, this.maxSpeed);
      console.log("Jedziesz z predkoscia ${this.speed}");
    } else {
      console.log("odpal silnik ziomek");
    }
  }
  slowDown(amount) {
    this.speed = Math.max(this.speed - amount, 0);
    console.log("Jedziesz z predkoscia ${this.speed}");
  }
}

class Van extends Auto {
  constructor(brand, maxSpeed, seats) {
    super(brand, maxSpeed);
    this.sets = seats;
  }
}

const bmw = new Van("bmw", 160, 9);
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
