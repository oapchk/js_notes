// speed, maxSpeed, engine
//speedUp, slowDown, startEngine,stopEngine

//factory function
function auto(brand, maxSpeed) {
  return {
    speed: 0,
    maxSpeed, //short object notation -> key = maxSpeed, value = maxSpeed - maxSpeed: maxSpeed => maxSpeed
    brand,
    engine: false,
  };
}
//paradygmat funckcyjny

function startEngine(car) {
  if (!car.engine) {
    car.engine = true;
    console.log("Silnik odpalony");
  } else {
    console.log("Silnik juz byl odpalony");
  }
}

function stopEngine(car) {
  if (car.speed === 0) {
    car.engine = false;
    console.log("Silnik zgaszony");
  } else {
    console.log("Zatrzymaj fure!!!!!!!!");
  }
}

function speedUp(car, amount) {
  if (car.engine) {
    car.speed = Math.min(car.speed + amount, car.maxSpeed);
    console.log("Jedziesz z predkoscia ${car.speed}");
  } else {
    console.log("odpal silnik ziomus");
  }
}

function slowDown(car, amount) {
  car.speed = Math.max(car.speed - amount, 0);
  console.log("Jedziesz z predkoscia ${car.speed}");
}

const bmw = auto("bmw", 160);
const toyota = auto("toyota", 198);

speedUp(bmw, 100);
startEngine(bmw);
speedUp(bmw, 50);
speedUp(bmw, 100);
speedUp(bmw, 100);
stopEngine(bmw);
slowDown(bmw, 100);
slowDown(bmw, 100);
slowDown(bmw, 100);
stopEngine(bmw);
