const DBJsonIO = require("./DBJsonIO");

const DBJson = new DBJsonIO();

class NoteList {
  constructor() {
    this.notes = this.initialize();
  }

  initialize() {
    // populate noteslist with data from db file
    let data = DBJson.read();
    if (!data) {
      // if data doesn't exist, start with empty array
      data = JSON.stringify([]);
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

  remove(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.updateDB();
    return new NoteList().notes;
  }

  updateDB() {
    // writes the updated array to the db.json file
    DBJson.write(JSON.stringify(this.notes));
  }

  clear() {
    // clears all notes
    this.notes = [];
    this.updateDB();
  }

  editNote(id, text) {
    // find the right note, then edit the contents
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
