const FileIO = require("../lib/FileIO");
const fs = require("fs");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new FileIO();
      const file = "db.json";
      let data;
      const mockReturnData = JSON.stringify({ title: "Test", text: "Testing" });

      fs.readFileSync.mockReturnValue(mockReturnData);
      data = fileIO.read(file);

      expect(data).toEqual(mockReturnData);
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const path = "../db/db.json";
      const data = JSON.stringify({ title: "Test", text: "Testing" });

      fileIO.write(path, data);

      expect(fs.writeFileSync).lastCalledWith(path, data);
    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const file = "../db/db.json";
      const data = JSON.stringify({ title: "Test", text: "Testing" });

      fileIO.append(file, data);

      expect(fs.appendFileSync).lastCalledWith(file, data);
    });
  });
});
