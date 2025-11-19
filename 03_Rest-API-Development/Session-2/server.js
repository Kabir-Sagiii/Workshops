const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Server Started");
});

//Get Endpoint
app.get("/get-users", function (req, res) {
  res.send("Get Request Received");
});
//http://localhost:5000/get-users

//Post Endpoint
app.post("/create-user", function (req, res) {
  res.send("Post Request Received");
});
//http://localhost:5000/create-user

//Put Endpoint
app.put("/update-user", function (req, res) {
  res.send("Put Request Received");
});
//http://localhost:5000/update-user

//Delete
app.delete("/remove-user", function (req, res) {
  res.send("Delete Request Received");
});
//http://localhost:5000/remove-user
