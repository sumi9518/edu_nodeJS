const http = require("http");

http
  .createServer((req, res) => {
    res.end("hello world");
  })
  .listen(3100);

console.log("server listening 3100");
