const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Apppcation started and pstening on port 3000");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});