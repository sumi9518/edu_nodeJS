const http = require("http");

http.createServer((req, res) => {
    res.send("hello world");
  })
  .listen(3100);

console.log("server listening 3100");
