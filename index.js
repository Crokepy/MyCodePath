const fs = require("fs");

function Folders() {
  fs.mkdirSync("./css");
  fs.mkdirSync("./js");
  fs.mkdirSync("./img");
  console.log("Folders: css, js, img create.");
}

function File() {
  fs.openSync("./css/style.css", "w");
  fs.openSync("./js/main.js", "w");
  fs.openSync("./index.html", "w");
  console.log("Files: css, js, html create.");
}

Folders();
File();

console.log("Happy Coding");

// By Croque
