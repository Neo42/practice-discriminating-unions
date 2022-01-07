/* eslint-disable @typescript-eslint/no-unused-vars */
interface MovingThing {
  speed: number;
}

// Add the necessary properties to allow for discriminating unions
interface Car extends MovingThing {
  type: "car";
  wheels: number;
}
interface Boat extends MovingThing {
  type: "boat";
  drag: number;
}
interface Plane extends MovingThing {
  type: "plane";
  drag: number;
  engines: number;
}
interface Train extends MovingThing {
  type: "train";
  cars: number;
  wheels: number;
}

type Vehicle = Car | Boat | Plane | Train;

// Without changing the parameter type, use discriminating unions
// to fix the type errors
function speed(vehicle: Vehicle) {
  console.log(vehicle.speed);
}
function wheelCount(vehicle: Vehicle) {
  if ("wheels" in vehicle) {
    console.log(vehicle.wheels);
  }
}
function dragAmount(vehicle: Vehicle) {
  if ("drag" in vehicle) {
    console.log(vehicle.drag);
  }
}
function numberOfCars(vehicle: Vehicle) {
  if (vehicle.type === "train") {
    console.log(vehicle.cars);
  }
}
