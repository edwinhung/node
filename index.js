#!/usr/bin/env node

import fs from "fs";
import util from "util";
import chalk from "chalk";

// Method 2
// const lstat = util.promisify(fs.lstat);

// Method 3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    throw new Error(err);
  }
  const statsPromises = filenames.map((filename) => {
    return lstat(filename);
  });

  const allStats = await Promise.all(statsPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);
    console.log(
      stats.isFile()
        ? chalk.green(filenames[index])
        : chalk.blue(filenames[index])
    );
  }
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
