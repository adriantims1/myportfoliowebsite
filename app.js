const express = require("express");

const app = express();
const port = process.env.PORT || 3000 || 80;

app.use(express.json());

app.listen(80, () => {
  console.log(`Listening on port ${port}`);
});
