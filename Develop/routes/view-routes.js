const router = require('express').Router();
const path = require('path');

// Displays the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Displays the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router;