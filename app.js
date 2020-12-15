const express = require("express");
const path = require("path");
const NoteList = require("./lib/NoteList");
const Note = require("./lib/Note");

const app = express();
const PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  // api route to get all notes
  const noteList = new NoteList();
  return res.json(noteList.getAllNotes());
});

app.get("/api/notes/:id", (req, res) => {
  const noteList = new NoteList();
  const id = req.params.id;
  return res.json(noteList.getNoteById(id));
});

app.post("/api/notes", (req, res) => {
  const noteList = new NoteList();
  const newNote = new Note(req.body.title, req.body.text);
  noteList.add(newNote);
  res.json(req.body);
});

app.delete("/api/notes/:id", (req, res) => {
  const noteList = new NoteList();
  const id = req.params.id;
  noteList.remove(id);
  res.json();
});

app.delete("/api/notes/clear", (req, res) => {
  const noteList = new NoteList();
  noteList.clear();
  res.json();
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
