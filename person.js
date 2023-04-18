class Person {
  constructor(name = 'John Doe', age) {
    this.name = name;
    this.age = age || 18;
  }

  greet() {
    console.log(`Hello, everyone! My name is ${this.name}, my age is ${this.age}!`);
  }
}

module.exports = Person;
