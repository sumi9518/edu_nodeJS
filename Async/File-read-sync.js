//step 1: import file system (fs)
const fs = require("fs");

//initialize of callback
const printDataFunction = function printData(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
};

//step 2: provide path & read file | printDataFunction is  Callback | please read data from file & when done then push callback function to event queue with data or error
fs.readFileSync("data.txt", printDataFunction);
console.log("task 2");

//step 3: print data (main thread given task to thread pool above, but no acknowledgement)
console.log("Task 3");
