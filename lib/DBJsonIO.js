const fs = require("fs");
const path = require("path");
const store = require("store");
const DB_FILE = "db.json";
const DB_PATH = path.resolve("./db");
const DB_FULL_PATH = path.resolve(path.join(DB_PATH, DB_FILE));
const STORE_KEY = "express-notes";

class DBJsonIO {
  constructor() {
    if (!fs.existsSync(DB_PATH)) {
      fs.mkdirSync(DB_PATH);
      fs.writeFileSync(DB_FULL_PATH, "");
    }
  }

  read() {
    return fs.readFileSync(DB_FULL_PATH, "utf8");
  }

  write(data) {
    store.set(STORE_KEY, data);
    return fs.writeFileSync(DB_FULL_PATH, data);
  }

  append(data) {
    store.set(STORE_KEY, this.read());
    return fs.appendFileSync(DB_FULL_PATH, data);
  }

  readStore() {
    if (store.get(STORE_KEY)) {
      return store.get(STORE_KEY);
    }
    return "";
  }
}

module.exports = DBJsonIO;
