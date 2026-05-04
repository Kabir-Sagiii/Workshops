const http = require("http");

const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to access Login Page, Try after Sometime");
    } else {
      res.end(data);
    }
  });
});

server.listen(4300, () => {
  console.log("Server started on 4300 port number");
});

//  http://localhost:4300
