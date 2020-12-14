const fs = require("fs");
const path = require("path");

// const DB_DIR =
const DB_FILE_PATH = path.resolve("./db/db.json");

class NoteList {
  constructor() {
    this.notes = this.initialize();
  }

  initialize() {
    // populate noteslist with data from db file
    const data = fs.readFileSync(DB_FILE_PATH);
    return JSON.parse(data);
  }

  add(note) {
    this.notes.push(note);
  }

  remove(note) {
    this.notes = this.notes.filter((element) => element !== note);
  }

  clear() {
    // clears all notes
    this.notes = [];
  }

  editNote(id, text) {
    for (const n of this.notes) {
      if (n.id === id) {
        n.text = text;
        break;
      }
    }
  }
}

module.exports = NoteList;
