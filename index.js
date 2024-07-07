#!/usr/bin/env node

const fs = require("fs");
const util = require("util");

// Method 2
const lstat = util.promisify(fs.lstat);

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err);
  }
  console.log(filenames);
});

// Method 2
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
