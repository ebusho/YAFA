import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to YAFA - Yet Another Finance App!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
