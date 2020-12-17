const fs = require("fs");
const path = require("path");
const DB_FILE = "db.json";
const DB_PATH = path.resolve("./db");
const DB_FULL_PATH = path.resolve(path.join(DB_PATH, DB_FILE));

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
    return fs.writeFileSync(DB_FULL_PATH, data);
  }

  append(data) {
    return fs.appendFileSync(DB_FULL_PATH, data);
  }
}

module.exports = DBJsonIO;
