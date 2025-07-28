import model from "./model.js";

function getAll() {
  return model.getAll();
}

function getById(id) {
  return model.getById(id);
}

function create(data) {
  return model.create(data);
}

function update(id, data) {
  return model.update(id, data);
}

export default {
  getAll,
  getById,
  create,
  update
};
