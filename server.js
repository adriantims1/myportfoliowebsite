const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});
