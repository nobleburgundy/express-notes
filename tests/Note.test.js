const Note = require("../lib/Note");

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
  });
});
