const fs = require('fs').promises;

// const myPromise = new Promise((resolve, reject) => {
//   //   resolve('hello');
//   //   reject('fail');
//   fs.readFile('./files/numbers.txt', 'utf8', (err, data) => {
//     if (err) return reject(err);
//     console.log('Success!');
//     resolve(data);
//   });
// });

// myPromise
//   .then((value) => {
// const numbersArray = value.split('\n').map(Number);
//     const totalSum = numbersArray.reduce((acc, curr) => acc + curr);
//     return new Promise((res, rej) => {
//       fs.writeFile('./files/totalSum.txt', totalSum.toString(), 'utf8', (err) => {
//         if (err) return rej(err);
//         res(totalSum * 2);
//       });
//     });
//   })
//   .then((value) => {
//     console.log(value, ' second then');
//   })
//   .catch((error) => {
//     console.log('Promise error: ', error);
//     return 5;
//   });

// Промисификация:

// let a = 0;

// function myFsStat(path) {
//   return new Promise((resolve, reject) => {
//     fs.stat(path, (err, stats) => {
//       if (err) return reject(err);
//       resolve(stats);
//     });
//   });
// }

// myFsStat('./files/numbers.txt').then((data) => {
//   a = data.size;
//   console.log(data);
// });

// console.log('file size', a);

// По дефолту работаем на промисах: fs.promises

// fs.stat('./files/totalSum.txt').then(console.log);

// (function getTotalSum() {
//   fs.readdir('./files', 'utf8')
//     .then((filenames) => {
//       const promisesArray = filenames.map((filename) => fs.readFile(`./files/${filename}`, 'utf8'));
//       const all = Promise.all(promisesArray);
//       console.log('promise all: ', all);
//       return all;
//     })
//     .then((files) => {
//       const result = files
//         .map((file) =>
//           file
//             .split('\n')
//             .map(Number)
//             .reduce((acc, cur) => acc + cur, 0),
//         )
//         .reduce((totalSum, currFile) => totalSum + currFile, 0);
//       return result;
//     })
//     .then(console.log)
//     .catch(console.log);
// })();

// ASYNC/AWAIT

async function asyncGetTotalSum() {
  const filenames = await fs.readdir('./files', 'utf8');
  const dataArray = await Promise.all(
    filenames.map((filename) => fs.readFile(`./files/${filename}`, 'utf8')),
  );
  const total = dataArray
    .map((file) =>
      file
        .split('\n')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0),
    )
    .reduce((totalSum, currFile) => totalSum + currFile, 0);
  //   await fs.writeFile('./newsum.txt', `${total}`, 'utf8');
  //   console.log('success!');
  //   const response = await fetch(`http://localhost:3000/post/${total}`);
  //   console.log(response.status);
  try {
    const response = await fetch('https://jsonplaceholder2.typicode.com/users');
    const users = await response.json();
    return users.map((user) => user.email);
  } catch (error) {
    console.log(error);
    return ['noemail@com.com'];
  }
  //   console.log(users.map((user) => `${user.address.city} ${user.address.street}`));
}

asyncGetTotalSum().then(console.log);

// class Student {
//   constructor() {
//     this.name = 'Alex';
//   }

//   get pass() {
//     return (async () => {})();
//   }

//   async callHelp() {
//     const response = await fetch(`http://callHelp.com/${this.name}`);
//   }
// }
