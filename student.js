const fs = require('fs');
const Person = require('./person');

class Student extends Person {
  static bootcamp = 'Elbrus';

  #bonus;

  constructor(name, email, git, bonus) {
    super(name, null);
    this.email = email;
    this.git = git;
    this.#bonus = Number(bonus);
  }

  punish(reason) {
    switch (reason) {
      case 'опоздал':
        this.#bonus += 1;
        break;
      case 'пропустил':
        this.#bonus += 2;
        break;
      case 'пропуск пятницы':
        this.#bonus += 3;
        break;
      default:
        break;
    }
  }

  set bonus(value) {
    // if (value - this.#bonus <= 3 && value - this.#bonus > 0) {
    //   this.#bonus = value;
    // } else {
    console.log('Use punsih method instead');
    // }
  }

  get bonus() {
    console.log('Someone is trying to access a private property (#bonus)');
    return this.#bonus;
  }

  get info() {
    return `${this.name} (${this.email}) - ${this.git}`;
  }

  static getArcticFoxes() {
    const fileData = fs.readFileSync('./students.txt', 'utf8');
    return fileData
      .split('\n')
      .map((row) => row.split('\t'))
      .map((row) => new Student(...row));
  }
}

module.exports = Student;
