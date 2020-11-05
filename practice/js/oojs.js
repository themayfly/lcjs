var Person = function(name) {
  this.name = name;
}
Person.prototype.greeting = function() {
  console.log('Hi person '+this.name);
}

var Student = function(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi student '+this.name);
  }
}


var StudentPerson = function(name) {
  this.name = name;
}

// StudentPerson.prototype.greeting = function() {
//   console.log('Hi StudentPerson '+this.name);
// }

StudentPerson.prototype = Object.create(Person.prototype);

console.log(Person.prototype.greeting)
var Jack = new Person('Jack');
var Jane = new Student('Jane');
var Nancy = new StudentPerson('Nancy');

Jack.greeting();
Jane.greeting();
Nancy.greeting();


// mixin

