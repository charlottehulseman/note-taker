const router = require('express').Router();
const noteData = require('../db/noteData.js');

// view all notes
router.get('/notes', function (req, res) {
    noteData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});


// post note
router.post('/notes', (req, res) => {
    noteData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});


// delete note
router.delete('/notes/:id', function (req, res) {
    noteData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;