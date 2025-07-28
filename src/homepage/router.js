import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to YAFA - Yet Another Finance App!");
});

export default router;
