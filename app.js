const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/", "notes.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
