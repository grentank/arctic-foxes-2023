const Person = require('./person');

function Student(name, age, phase) {
  Person.call(this, name, age);
  this.bootcamp = 'Elbrus';
  this.phase = phase;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.toString = function () {
  return `Student: ${this.name} (studies on phase ${this.phase})`;
};

module.exports = Student;
