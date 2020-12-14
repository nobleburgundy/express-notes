const uuid = require("uuid");

class Note {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.id = this.generateID();

    if (!title.trim().length || !text.trim().length) {
      throw new Error("Error creating Note object it was likely passed with no, or incorrect arguments.");
    }
  }

  getName() {
    return this.title;
  }

  getId() {
    return this.id;
  }

  getText() {
    return this.text;
  }

  generateID() {
    return uuid.v1();
  }

  saveNote() {
    const dbPath = "../db/db.json";
  }
}

module.exports = Note;
