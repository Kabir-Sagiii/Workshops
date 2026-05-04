const fs = require("fs");

fs.readFile("home.css", "utf-8", (error, data) => {
  if (error) {
    console.log("failed to access the content of home.html");
  } else {
    console.log(data);
  }
});
