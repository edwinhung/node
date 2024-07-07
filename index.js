#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err);
  }
  console.log(filenames);
});

const lstat = (filename) => {
  return new Promise((resolve, reject) => {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        reject(err);
      }
      resolve(stats);
    });
  });
};
