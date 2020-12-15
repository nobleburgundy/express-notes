const fs = require("fs");
const path = require("path");
const DB_FILE = "db.json";
const DB_PATH = path.resolve("./db");
const DB_FILE_PATH = path.resolve(path.join(DB_PATH, DB_FILE));

class FileIO {
  constructor() {}
  read() {
    return fs.readFileSync(DB_FILE_PATH, "utf8");
  }
  write(data) {
    return fs.writeFileSync(DB_FILE_PATH, data);
  }
  append(data) {
    return fs.appendFileSync(DB_FILE_PATH, data);
  }
}

module.exports = FileIO;
