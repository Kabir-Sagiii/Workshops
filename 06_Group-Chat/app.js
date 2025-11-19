const express = require("express");
const fs = require("fs");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  fs.readFile("main.html", "utf-8", (error, data) => {
    if (error) {
      res.send("<h1>Something went wrong</h1>");
    } else {
      res.send(data);
    }
  });
});

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  socket.on("chat message", (msg) => {
    // console.log("message: " + msg);

    // io.emit("chat message", msg);
    socket.broadcast.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("Server started at 3000");
});
