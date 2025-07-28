import crypto from "crypto";

import db from "../config/db.js";

function getAll() {
  const stmt = db.prepare("SELECT * FROM transactions");
  return stmt.all();
}

function getById(id) {
  const stmt = db.prepare("SELECT * FROM transactions WHERE id = ?");
  return stmt.get(id);
}

function create(data) {
  const id = crypto.randomUUID();
  const { amount, description } = data;

  const stmt = db.prepare("INSERT INTO transactions (id, amount, description) VALUES (?, ?, ?)");
  stmt.run(id, amount, description);

  return { id, amount, description };
}

function update(id, data) {
  const { amount, description } = data;

  const stmt = db.prepare("UPDATE transactions SET amount = ?, description = ? WHERE id = ?");

  const result = stmt.run(amount, description, id);

  if (result.changes > 0) {
    return { id, amount, description };
  }
  return null;
}

export default {
  getAll,
  getById,
  create,
  update
};
