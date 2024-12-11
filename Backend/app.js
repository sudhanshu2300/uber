const dotenv = require("dotenv");
dotenv.config();
const express = require("express"); //inserted express
const cors = require("cors");
const app = express(); // created variable app to store express

app.use(cors());

//creating a server reuest responce
app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
