const path = require("path");
const FileIO = require("./FileIO");

const fileIO = new FileIO();
const DB_FILE_PATH = path.resolve("./db/db.json");

class NoteList {
  constructor() {
    this.notes = this.initialize();
  }

  initialize() {
    // populate noteslist with data from db file
    // const data = fs.readFileSync(DB_FILE_PATH);
    const data = fileIO.read(DB_FILE_PATH);
    if (!data) {
      data = [];
    }
    return JSON.parse(data);
  }

  add(note) {
    if (!note.title.trim().length || !note.text.trim().length) {
      throw new Error("Request body has to include Note 'title' and Note 'text'");
    }

    this.notes.unshift(note);
    this.updateDB();
    return note.id;
  }

  remove(note) {
    this.notes = this.notes.filter((element) => element !== note);
    this.updateDB();
  }

  updateDB() {
    // writes the updated array to the db.json file
    fileIO.write(DB_FILE_PATH, JSON.stringify(this.getAllNotes()));
  }

  clear() {
    // clears all notes
    this.notes = [];
    this.updateDB();
  }

  editNote(id, text) {
    for (const n of this.notes) {
      if (n.id === id) {
        n.text = text;
        break;
      }
    }
    this.updateDB();
  }

  getAllNotes() {
    return this.notes;
  }

  getNoteById(id) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        return this.notes[i];
      }
    }
    return `Note with id ${id} not found.`;
  }
}

module.exports = NoteList;
