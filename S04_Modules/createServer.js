const http = require("http");
const portNumber = 3131;

//create a http server
// const httpServer = http.createServer(function (req, res) {
//   // this function called whenver request is received
//   console.log(req.method);
//   res.end("My first response from node js backend");
// });

const httpServer = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.end("It is a Get Request");
  } else if (req.method === "POST") {
    res.end("It is a POST Request");
  } else if (req.method === "PUT") {
    res.end("It is a PUT Request");
  } else {
    res.end("It is a DELETE Request");
  }
});

//start the server
httpServer.listen(portNumber, function () {
  console.log("Http Server Started");
});
