import express from "express";
import transactions from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const allTransactions = transactions.getAll();
  res.json(allTransactions);
});

router.get("/:id", (req, res) => {
  const transactionId = req.params.id;
  const transaction = transactions.getById(transactionId);
  if (!transaction) {
    return res.status(404).json({ error: "Transaction not found" });
  }
  res.json(transaction);
});

router.post("/", (req, res) => {
  const newTransaction = req.body;
  const createdTransaction = transactions.create(newTransaction);
  res.status(201).json(createdTransaction);
}); 

router.put("/:id", (req, res) => {
  const transactionId = req.params.id;
  const updatedTransaction = req.body;
  const transaction = transactions.update(transactionId, updatedTransaction);
  if (!transaction) {
    return res.status(404).json({ error: "Transaction not found" });
  }
  res.json(transaction);
});

export default router;
