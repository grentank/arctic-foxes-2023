// let data = null;

// console.log(1, data);

// function callback() {
//   setTimeout(() => {
//     data = 'hello';
//     console.log(3, data);
//     callback();
//   }, 500);
// }

// setTimeout(callback, 2000);

// let counter = 0;

// const intervalId = setInterval(() => {
//   data = 'hello';
//   console.log(counter, data);
//   counter += 1;
//   if (counter === 5) clearInterval(intervalId);
// }, 500);

// console.log(2, data);

// const fs = require('fs');

// fs.readFile('./files/1.txt', 'utf8', (err, data) => {
//   //   console.log('data', data);
//   //   console.log('error', err);

//   if (err) throw new Error(err);

//   const res = data.split('\n').filter((word) => word.length <= 4);

//   fs.writeFile('./files/2.txt', res.join('\n'), 'utf8', (writeErr) => {
//     if (writeErr) throw new Error(writeErr);
//     console.log('done');

//     fs.readdir('./files', 'utf8', (errReaddir, dirData) => {
//       if (errReaddir) throw new Error(errReaddir);
//       console.log(dirData);
//     });
//   });
// });

// const bcrypt = require('bcrypt');

// console.log('start hashing');

// console.time();
// bcrypt.hash('my strong password', 16, (err1, hash1) => {
//   if (err1) throw new Error(err1);
//   bcrypt.hash('my strong password2', 16, (err2, hash2) => {
//     if (err2) throw new Error(err2);
//     console.timeEnd();
//     console.log('Hashes:', hash1, hash2);
//   });
// });

// let hashCounter = 0;
// let hash1Global;
// let hash2Global;

// bcrypt.hash('my strong password', 15, (err1, hash1) => {
//   if (err1) throw new Error(err1);
//   hash1Global = hash1;
//   hashCounter += 1;
//   if (hashCounter === 2) {
//     console.timeEnd();
//     console.log('Hashes:', hash1Global, hash2Global);
//   }
// });

// bcrypt.hash('my strong password2', 15, (err2, hash2) => {
//   if (err2) throw new Error(err2);
//   hashCounter += 1;
//   hash2Global = hash2;
//   if (hashCounter === 2) {
//     console.timeEnd();
//     console.log('Hashes:', hash1Global, hash2Global);
//   }
// });

// console.log('code continues');

const fs = require('fs');

fs.readdir('./files', 'utf8', (readdirErr, filenames) => {
  if (readdirErr) throw new Error(readdirErr);

  const names = [];

  let filesRead = 0;

  filenames.forEach((filename) => {
    fs.readFile(`./files/${filename}`, 'utf8', (readFileErr, fileData) => {
      if (readFileErr) throw new Error(readFileErr);
      names.push(...fileData.split('\n'));
      filesRead += 1;

      if (filesRead === filenames.length) {
        const uniqueNames = Array.from(new Set(names));
        fs.writeFile('./result.txt', uniqueNames.join('\n'), 'utf8', (writeErr) => {
          if (writeErr) throw new Error(writeErr);
          console.log('done!');
        });
      }
    });
  });
});
