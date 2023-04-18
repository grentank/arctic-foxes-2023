const Employee = require('./employee');
const Student = require('./student');

// const alexStudent = new Student('Alex', 45, 1);
// const defaultStudent2 = new Student(undefined, 40);
// const defaultStudent = new Student();

// alexStudent.greet();
// console.log(defaultStudent);

// const charlieEmployee = new Employee({
//   salary: 3000,
//   age: 50,
//   name: 'Charlie',
// });

// charlieEmployee.promote(500);

// console.log(charlieEmployee)

// console.log(charlieEmployee);

// const defaultEmployee = new Employee();

// console.log(defaultEmployee);

const students = Student.getArcticFoxes();
// console.log(students[7]);
// console.log(students[7].bonus);
// students[7].bonus = 3;
// console.log(students[7].bonus);
// console.log(students[5]);

const jenya = students.find((student) => student.name.includes('Секре'));

console.log(jenya.bonus);
jenya.bonus = 10;
jenya.email = 'xxxnoemail----';
jenya.punish('пропуск пятницы');
console.log(jenya);
