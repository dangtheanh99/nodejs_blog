const express = require("express");
const app = express();
const port = 4000;

app.get("/trang_chu", (req, res) => {
  res.send("Hello World 1!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
