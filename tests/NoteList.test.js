const Note = require("../lib/Note");
const NoteList = require("../lib/NoteList");

describe("NoteList class", () => {
  describe("Initilization", () => {
    it("Should create an object when initialized", () => {
      const noteList = new NoteList();

      expect(typeof noteList).toBe("object");
    });
  });
  describe("Add, Edit, Remove, Clear notes", () => {
    it("Add single note", () => {
      const noteList = new NoteList();
      const note = new Note("testing", "testing text");
      noteList.add(note);

      expect(noteList.getNoteById(note.id)).toEqual(note);
    });

    it("Add multiple notes", () => {
      const noteList = new NoteList();
      const note = new Note("testing", "testing text");
      const note2 = new Note("testing", "testing text");

      noteList.add(note);
      noteList.add(note2);

      expect(noteList.getNoteById(note.id)).toEqual(note);
      expect(noteList.getNoteById(note2.id)).toEqual(note2);
    });

    it("Edit note", () => {
      const noteList = new NoteList();
      const note = new Note("Delete this note", "Delete this note text");
      const newText = "This is the great new edited text";

      noteList.add(note);
      noteList.editNote(note.id, newText);

      expect(noteList.notes).toContainEqual(note);
    });

    it("Remove note", () => {
      const noteList = new NoteList();
      const note = new Note("Delete this note", "Delete this note text");

      noteList.add(note);
      noteList.remove(note);

      expect(noteList.notes).not.toContainEqual(note);
    });

    it("Clear notes", () => {
      const noteList = new NoteList();
      const note = new Note("testing", "testing text");
      const note2 = new Note("testing", "testing text");
      noteList.add(note);
      noteList.add(note2);

      // noteList.clear();

      // expect(noteList.notes.length).toBe(0);
    });
  });
});
