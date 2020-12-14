const Note = require("../lib/Note");
const NotesList = require("../lib/NotesList");
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
      const title = "Test";
      const text = "Test text";
      const note = new Note("Test", "Test text");

      expect(uuid.validate(note.id)).toBe(true);
    });
  });

  describe("Add Notes", () => {
    it("Should add a new Note object to it's notes array", () => {
      const noteList = new NotesList();
      const note = new Note("testing", "testing text");
      console.log(note);
      noteList.add(note);
      //   console.log(noteList.notes);

      expect(noteList.notes).toContainEqual(note);
    });

    it("Adding multiple notes should add all notes successfully", () => {
      const noteList = new NotesList();
      const note = new Note("testing", "testing text");
      const note2 = new Note("testing", "testing text");
      noteList.add(note);
      noteList.add(note2);

      expect(noteList.notes).toContainEqual(note);
      expect(noteList.notes).toContainEqual(note2);
    });
  });
});
