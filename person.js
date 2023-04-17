function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function greet() {
  console.log(`Hello, everyone! My name is ${this.name}, my age is ${this.age}`);
};

Person.prototype.sayHi = function sayHi() {
}

module.exports = Person;
