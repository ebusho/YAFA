import db from "../config/db.js";

function getAll() {
  const stmt = db.prepare("SELECT * FROM transactions");
  return stmt.all();
}

function getById(id) {
  const stmt = db.prepare("SELECT * FROM transactions WHERE id = @id");
  return stmt.get({ id });
}

function create(data) {
  const { amount, description } = data;

  const stmt = db.prepare("INSERT INTO transactions (amount, description) VALUES (@amount, @description) RETURNING *");
  const createdEntry = stmt.get({ amount, description });

  return createdEntry;
}

function update(id, data) {
  const { amount, description } = data;

  const stmt = db.prepare("UPDATE transactions SET amount = @amount, description = @description WHERE id = @id RETURNING *");
  const updatedEntry = stmt.get({ amount, description, id });

  if (!updatedEntry) {
    return null;
  }
  return updatedEntry;
}

export default {
  getAll,
  getById,
  create,
  update
};
