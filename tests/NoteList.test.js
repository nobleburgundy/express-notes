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
      // clean up
      noteList.remove(note.id);
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

      newNoteArray.forEach((note) => {
        noteList.add(note);
        expect(noteList.notes).toContainEqual(note);
      });

      expect(noteList.notes.length).toBe(preAddLength + newNoteArray.length);
      // clean up
      newNoteArray.forEach((note) => noteList.remove(note.id));
    });

    it("Edit note", () => {
      const noteList = new NoteList();
      const note = new Note("test1", "test text 1");
      const newText = "TestEdit";

      noteList.add(note);
      noteList.editNote(note.id, newText);

      expect(noteList.getAllNotes()).toContainEqual(note);
      // clean up
      noteList.remove(note.id);
    });

    it("Remove note", () => {
      const noteList = new NoteList();
      const note = new Note("test1", "test text 1");

      noteList.add(note);
      noteList.remove(note.id);

      expect(noteList.notes).not.toContainEqual(note);
    });

    it("Should throw error if nothing provided to add()", () => {
      const noteList = new NoteList();

      const cb = () => noteList.add();

      expect(cb).toThrow();
    });

    it("Should throw error if add request doesn't have 'title'", () => {
      const noteList = new NoteList();

      const cb = () => noteList.add({ title: "", text: "Test text" });

      expect(cb).toThrowError("Request body has to include Note 'title' and Note 'text'");
    });

    it("Should throw error if add request doesn't have 'text'", () => {
      const noteList = new NoteList();

      const cb = () => noteList.add({ title: "Test", text: "" });

      expect(cb).toThrowError("Request body has to include Note 'title' and Note 'text'");
    });
  });
});
