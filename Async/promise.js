console.log("task 1");

console.log("Task 2");

const printDataFunction = function printData(err, data) {
    if (err) {
        console.log(err)
    }
    else {
        dataFromFile = data;
        console.log(data.toString());
        
     }
 }

function readFile() {
  //resolve push task to event queue | Resolve is called only once in one promise unlike callback
  const promise = new Promise((resolve, reject) => {
    // resolve("This is your data")
    setTimeout(() => {
      resolve("this is your data");
    }, 4000);
  });
  return promise;
}

const result = readFile();
result.then(
  (data) => {
    printDataFunction(null, data);
  },
  (err) => {
    console.log(err);
  }
);
console.log(result);

console.log("task 4");
