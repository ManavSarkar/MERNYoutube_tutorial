const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello World");
});

app.get("/contact", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("Hello World");
});

app.get("/signup    ", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
