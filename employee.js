const Person = require('./person');

class Employee extends Person {
  //   constructor(options) {
  //     super(options.name, options.age);
  //     this.salary = options.salary ?? 1500;
  //     this.workspace = 'Elbrus';
  //   }
  //   constructor({ name: initName, age: initAge, salary: initSalary }) {
  //     super(initName, initAge);
  //     this.salary = initSalary;
  //     this.workspace = 'Elbrus';
  //   }
  constructor({ name, age = 22, salary = 870 } = { age: 25, salary: 500 }) {
    super(name, age);
    this.salary = salary;
    this.workspace = 'Elbrus';
  }

  promote(bonusSalary) {
    this.salary += bonusSalary;
    console.log(`${this.name} got promoted!`);
  }
}

module.exports = Employee;
