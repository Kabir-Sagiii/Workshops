const fs = require("fs");

fs.mkdir("src", (error) => {
  if (error) {
    console.log("Failed to create Folder");
  } else {
    console.log("created folder");
  }
});
