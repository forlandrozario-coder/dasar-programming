function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}
Vehicle.prototype.getInfo = function() {
  return `${this.make} ${this.model}`;
};
function Car(make, model, doors) {
  Vehicle.call(this, make, model);
  this.doors = doors;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
const car1 = new Car("Toyota", "Corolla", 4);
const car2 = new Car("Honda", "Civic", 2);

console.log(car1.getInfo()); 
console.log(car2.getInfo()); 


console.log("Do they share the same method reference?", car1.getInfo === car2.getInfo); // true