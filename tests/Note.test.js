const Note = require("../lib/Note");
const NotesList = require("../lib/NoteList");
const uuid = require("uuid");

describe("Notes", () => {
  describe("Initialization", () => {
    it("Should create an object with title and text when provided with correct arguments", () => {
      const title = "Test";
      const text = "Test text";
      const note = new Note("Test", "Test text");

      expect(note.title).toEqual(title);
      expect(note.text).toEqual(text);
      expect(note.id.length).toBeGreaterThan(0);
    });

    it("Should throw an error if no arugments are provided", () => {
      const cb = () => new Note();

      expect(cb).toThrow();
    });

    it("Note.id should generate a valid UUID", () => {
      const note = new Note("Test", "Test text");

      expect(uuid.validate(note.id)).toBe(true);
    });
  });

  describe("Add, Edit, Remove, Clear notes", () => {
    it("Add single note", () => {
      const noteList = new NotesList();
      const note = new Note("testing", "testing text");
      noteList.add(note);

      expect(noteList.notes).toContainEqual(note);
    });

    it("Add multiple notes", () => {
      const noteList = new NotesList();
      const note = new Note("testing", "testing text");
      const note2 = new Note("testing", "testing text");

      noteList.add(note);
      noteList.add(note2);

      expect(noteList.notes).toContainEqual(note);
      expect(noteList.notes).toContainEqual(note2);
    });

    it("Edit note", () => {
      const noteList = new NotesList();
      const note = new Note("Delete this note", "Delete this note text");
      const newText = "This is the great new edited text";

      noteList.add(note);
      noteList.editNote(note.id, newText);

      expect(noteList.notes).toContainEqual(note);
    });

    it("Remove note", () => {
      const noteList = new NotesList();
      const note = new Note("Delete this note", "Delete this note text");

      noteList.add(note);
      noteList.remove(note);

      expect(noteList.notes).not.toContainEqual(note);
    });

    it("Clear notes", () => {
      const noteList = new NotesList();
      const note = new Note("testing", "testing text");
      const note2 = new Note("testing", "testing text");
      noteList.add(note);
      noteList.add(note2);

      noteList.clear();

      expect(noteList.notes.length).toBe(0);
    });
  });
});
