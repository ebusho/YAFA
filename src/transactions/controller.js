import crypto from "crypto";

const transactions = [
  { id: "c24e4efd-40ba-4317-8784-0d143861f5c3", amount: 100, description: "Grocery shopping" },
  { id: "d7d30277-72ea-42ab-8647-2ebef2da6552", amount: 50, description: "Gas station" },
  { id: "495f316e-9f18-4412-9b67-d4db223eba0b", amount: 200, description: "Online purchase" }
]

function getAll() {
  return transactions;
}

function getById(id) {
  return transactions.find(transaction => transaction.id === id);
}

function create(transaction) {
  const newTransaction = {
    id: crypto.randomUUID(),
    ...transaction
  };
  transactions.push(newTransaction);
  return newTransaction;
}

function update(id, updatedTransaction) {
  const index = transactions.findIndex(transaction => transaction.id === id);
  if (index !== -1) {
    transactions[index] = { ...transactions[index], ...updatedTransaction };
    return transactions[index];
  }
  return null;
}

export default {
  getAll,
  getById,
  create,
  update
};
