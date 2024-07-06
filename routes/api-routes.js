const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', async (req, res) => {
    const file = fs.readFileSync("db/db.json", "utf8");
    const notesJson = await JSON.parse(file);
    res.json(notesJson);
});

router.post('/api/notes', (req, res) => {
    const file = fs.readFileSync("db/db.json", "utf8");
    const notesJson = JSON.parse(file);
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    notesJson.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notesJson));
    res.json(notesJson);
});

router.delete('/api/notes/:id', (req, res) => {
    let file = fs.readFileSync("db/db.json", "utf8");
    const notesJson = JSON.parse(file);
    const newNotes = notesJson.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
    res.json("Note deleted.");
});

module.exports = router; 