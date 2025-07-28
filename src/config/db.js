import Database from "better-sqlite3";
import fs from "fs";

const dbOptions = {
  verbose: console.log,
};

fs.mkdirSync("data", { recursive: true });

const db = new Database("data/yafa.db", dbOptions);
db.pragma('journal_mode = WAL');

// Set up the database schema
const schema = fs.readFileSync("./src/config/schema.sql", "utf8");
db.exec(schema);

export default db;
