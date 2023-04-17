const fs = require('fs');

const Person = require('./person');
const Student = require('./student');

// Array.isArray()
// Object

// const person = {
//   name: 'Alex',
//   age: 25,
//   skills: ['JS', 'HTML', 'CSS'],
//   greet,
// };

// const person2 = {
//   name: 'Bobx',
//   age: 30,
//   skills: ['C++', 'Java', 'Python'],
//   addNumbers(a, b, c) {
//     console.log(`${this.name} is adding numbers`);
//     return a + b + c;
//   },
// };

// console.log(person.greet === person2.greet);
// person.greet.call(person2);
// person.greet.apply(person2);
// person2.greet();

// const numbers = [5, 13, 18];

// console.log(person2.addNumbers.call(person, ...numbers));
// console.log(person2.addNumbers.apply(person, numbers));

// const personAdds = person2.addNumbers.bind(person, ...numbers);

// console.log(personAdds());

// console.log(this)

// for (const key in obj) {
//   //   if (Object.hasOwnProperty.call(obj, key)) {
//   const element = obj[key];
//   console.log('key ', key, ', value', element);
//   //   }
// }

// Object.prototype.kill = function () {
//   console.log('Killed');
//   process.exit(1);
// };

// console.log(person.kill());
// console.log(`${person.name} tries to continue the app`);

// const alex = new Person('Alex', 25);
const bob = new Person('Bob', 30);
// console.log(alex, '\n', bob);

const charlie = new Student('Charlie', 20, 1);

// bob.greet()
// charlie.greet();

// console.log(charlie);

const students = [
  new Student('Alex', 25, 1),
  new Student('Bob', 30, 2),
  new Student('Charlie', 20, 3),
  new Student('David', 18, 4),
  new Student('Ella', 22, 5),
  new Person('Fedor', 44),
];

students.toString = function () {
  return this.map(
    (student) => `Name: ${student.name} ${student.age}, phase:  ${student.phase}`,
  ).join('\n');
};

fs.writeFileSync('./test.txt', `${students}`, 'utf8');
