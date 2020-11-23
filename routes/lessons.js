const express = require('express')
const router = express.Router()
const Lesson = require('../models/Lesson')

router.get('/student/:studentId', (req, res, next) => { 
  Lesson.find({ attending:req.params.studentId }).populate('teacher', 'userName')
    .then(studentLessons => {
      if(!studentLessons) return res.status(400).json({ message: 'No lessons for this student' })
      console.log('student lessons', studentLessons)
      res.status(200).json(studentLessons)
    })
    .catch(next)
})

router.get('/teacher/:teacherId', (req, res, next) => { 
  Lesson.find({ teacher:req.params.teacherId })
    .then(teacherLessons => {
      if(!teacherLessons) return res.status(400).json({ message: 'No lessons for this teacher' });
      res.status(200).json(teacherLessons)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => { 
  Lesson.findById( req.params.id )
    .then(lesson => {
      if(!lesson) return res.status(400).json({ message: 'No lesson with such id' });
      res.status(200).json(lesson)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
	console.log('post', req.body)
	Lesson.create(req.body)
	.then((newLesson) => {
		res.status(201).json(newLesson)
	})
	.catch(next);
});

router.delete('/:id', (req, res, next) => { 
	Lesson.findByIdAndDelete(req.params.id)
	.then((lessonDeleted) => {
		res.status(200).json(lessonDeleted._id)
	})
	.catch(next)
})

module.exports = router
