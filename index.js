const express = require("express");
const app = express();
const port = 3001;
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
