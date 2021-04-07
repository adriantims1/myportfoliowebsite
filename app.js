const express = require("express");

const app = express();
const port = process.env.PORT || 3000 || 80;

app.use(express.json());

app.listen(port, (req, res) => {
  res.send(`Listening on port ${port}`);
});
