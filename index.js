const fs = require("fs");

fs.readdir(".", (err, path) => {
  if (err) {
    throw new Error(err);
  }
  console.log(path);
});
