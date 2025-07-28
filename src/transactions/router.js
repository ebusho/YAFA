import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of all transactions!");
});

router.get("/:id", (req, res) => {
  const transactionId = req.params.id;
  res.send(`Details of transaction with ID: ${transactionId}`);
});

router.post("/", (req, res) => {
  const newTransaction = req.body;
  res.status(201).send(`Transaction created with ID: ${newTransaction.id}`);
}); 

router.put("/:id", (req, res) => {
  const transactionId = req.params.id;
  const updatedTransaction = req.body;
  res.send(`Transaction with ID: ${transactionId} updated`);
});

export default router;
