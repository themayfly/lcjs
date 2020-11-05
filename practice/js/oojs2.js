var Car = function(name) {
  this.name = name;
};
Car.prototype.drive = function() {
  console.log('#### driving car ', this.name);
};


var SuperCar = function(name) {
  Car.call(this, name);
}

// SuperCar.prototype = Object.create(Car.prototype);
SuperCar.prototype = Car.prototype;

Car.prototype.drive = function() {
  console.log('#### driving faster car ', this.name);
}



var superCar = new SuperCar('Lambo');
superCar.drive();
console.log('#### supercar name = ', superCar.name)