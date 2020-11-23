const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/all/:studentId', (req, res, next) => { 
  Note.find({ student:req.params.studentId })
    .then(studentNotes => {
      if(!studentNotes) return res.status(400).json({ message: 'No notes for this student' });
      res.status(200).json(studentNotes)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => { 
  Note.findById( req.params.id )
    .then(note => {
      if(!note) return res.status(400).json({ message: 'No note with such id' });
      res.status(200).json(note)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
	console.log('post', req.body)
	Note.create(req.body)
	.then((newNote) => {
		res.status(201).json(newNote)
	})
	.catch(next);
});

router.delete('/:id', (req, res, next) => { 
  console.log(req.params.id)
  Note.findByIdAndDelete(req.params.id)
	.then((noteDeleted) => {
		res.status(200).json(noteDeleted._id)
	})
	.catch(next)
})

module.exports = router
