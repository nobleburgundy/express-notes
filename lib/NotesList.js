class NotesList {
  constructor() {
    this.notes = [];
  }

  add(note) {
    this.notes.push(note);
  }

  remove(note) {
    this.notes = this.notes.filter((element) => element === note);
  }

  clear() {
    // clears all notes
    this.notes = [];
  }

  editNote(id, text) {
    for (const n of notes) {
      if (note.id === id) {
        n.text = note.text;
        break;
      }
    }
  }
}

module.exports = NotesList;
