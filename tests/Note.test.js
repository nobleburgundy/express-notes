const Note = require("../lib/Note");
const uuid = require("uuid");

describe("Note Class", () => {
  describe("Initialization", () => {
    it("Should create an object with title and text when provided with correct arguments", () => {
      const note = new Note("Test", "Test text");

      expect(typeof note).toBe("object");
    });

    it("Should throw an error if no arugments are provided", () => {
      const cb = () => new Note();

      expect(cb).toThrow();
    });

    it("Note.getTitle() should return the correct title", () => {
      // create a unique title to test against
      const title = "testing" + uuid.v1();
      const text = "testing";

      const note = new Note(title, text);

      expect(note.getTitle()).toEqual(title);
    });

    it("Note.getText() should return the correct title", () => {
      const title = "testing";
      // create unique text to test against
      const text = "testing" + uuid.v1();

      const note = new Note(title, text);

      expect(note.getText()).toEqual(text);
    });

    it("Note.getId() should return a valid UUID", () => {
      const note = new Note("Test", "Test text");

      expect(uuid.validate(note.getId())).toBe(true);
    });
  });
});
