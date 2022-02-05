//step1: import FS library

const fs = require("fs");

//read async
fs.readFile("content.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log("program is completed");
