const fs = require("fs");

const data = {
  name: "Please enter your name",
  age: "Please enter your age",
};

fs.writeFileSync("data.txt", JSON.stringify(data), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Data write complete");
  }
});

console.log("program completed");
