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
      const note = new Note("test1", "test text 1");
      noteList.add(note);

      expect(noteList.notes[0]).toBe(note);
    });

    it("Add multiple notes", () => {
      const noteList = new NoteList();
      const preAddLength = noteList.notes.length;
      const newNoteArray = [
        new Note("test1", "test text 1"),
        new Note("test2", "test text 2"),
        new Note("test3", "test text 3"),
        new Note("test4", "test text 4"),
      ];

      for (const note of newNoteArray) {
        noteList.add(note);
        expect(noteList.notes).toContainEqual(note);
      }

      expect(noteList.notes.length).toBe(preAddLength + newNoteArray.length);
    });

    it("Edit note", () => {
      const noteList = new NoteList();
      const note = new Note("test1", "test text 1");
      const newText = "TestEdit";

      noteList.add(note);
      noteList.editNote(note.id, newText);

      expect(noteList.getAllNotes()).toContainEqual(note);
    });

    it("Remove note", () => {
      const noteList = new NoteList();
      const note = new Note("test1", "test text 1");

      noteList.add(note);
      noteList.remove(note);

      expect(noteList.notes).not.toContainEqual(note);
    });
  });
});
