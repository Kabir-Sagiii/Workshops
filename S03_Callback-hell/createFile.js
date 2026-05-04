const fs = require("fs");

fs.writeFile("home.js", "", (error) => {
  if (error) {
    console.log("failed to create file");
  } else {
    console.log("File is created");
  }
});
