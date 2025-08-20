const express = require("express");
const fs = require("fs");
const PORT = 3000;

const app = express();

app.get("/files", (req, res) => {
  fs.readdir("./files", function (err, data) {
    res.json({ data });
  });
});

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  fs.readFile(`./files/${filename}`, "utf-8" , (err, data) => {
    res.send(`<b>${data}</b>`);
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on Port number :- ${PORT}`);
});
