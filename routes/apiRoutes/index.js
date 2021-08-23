const fs = require("fs");
const path = require("path");

const router = require("express").Router();

const newNote = (note) => {
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  return note;
};

router.get("/notes", (req, res) => {
  res.json(notes);
});

module.exports = router;
