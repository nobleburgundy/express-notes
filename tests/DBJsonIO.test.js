const DBJsonIO = require("../lib/DBJsonIO");
const fs = require("fs");
const path = require("path");

jest.mock("fs");

describe("DBJsonIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new DBJsonIO();
      const file = path.resolve(path.join("./db", "db.json"));
      let data;
      const mockReturnData = JSON.stringify({ title: "Test", text: "Testing" });

      fs.readFileSync.mockReturnValue(mockReturnData);
      data = fileIO.read();

      expect(data).toEqual(mockReturnData);
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new DBJsonIO();
      const file = path.resolve(path.join("./db", "db.json"));
      const data = JSON.stringify({ title: "Test", text: "Testing" });

      fileIO.write(data);

      expect(fs.writeFileSync).lastCalledWith(file, data);
    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
      const fileIO = new DBJsonIO();
      const file = path.resolve(path.join("./db", "db.json"));
      const data = JSON.stringify({ title: "Test", text: "Testing" });

      fileIO.append(data);

      expect(fs.appendFileSync).lastCalledWith(file, data);
    });
  });
});
