const fs = require("fs");

// fs.writeFileSync("node.txt", "This file was created by Node.js");

fs.appendFile("notes.txt", "I live in Philadelphia", function (err) {
  if (err) throw err;
  console.log("File is created successfully");
});

fs.copyFile("notes.txt", "copyNotes.txt", function (err) {
  if (err) throw err;
  console.log("file was copied successfully");
});

fs.rename("notes.txt", "notynotes.txt", () => {
  console.log("\nFile Renamed!\n");
});

const curr = "./";
fs.readdir(curr, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

fs.readFile("notynotes.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
