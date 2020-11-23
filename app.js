require("dotenv").config()
require("./config/dbConnection")

const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const Lesson = require('./models/Lesson')
/**
 * Server
 */
const port = process.env.PORT || '5000'
app.set('port', port)
const server = require('http').createServer(app)
server.listen(port);
server.on('error', err => console.error(err));
server.on('listening', () => console.log('listening'));
/**
 * Socket
 */

const io = require('socket.io')(server)

const attendingLesson = {} // { room : [ mongoId ] }
const attendingRoom = {} // { room : [ socketId ] }
const peers = {} // { socket.id : peerId }
const teachers = {} // { socket.id : mongoId }
const codeSessions = {} // { teacher's peerId : { html, css, js } }

io.on('connection', socket => {
  socket.on('join', (room, userId, role) => {
    socket.join(room)
    socket.to(room).broadcast.emit('classmate joined', userId)
    
    if(!attendingLesson[room]) attendingLesson[room] = []
    attendingLesson[room].push(userId)
    
    if(!attendingRoom[room]) attendingRoom[room] = []
    attendingRoom[room].push(socket.id)
    
    if(role === 'teacher') teachers[socket.id] = userId
    
    if(role === 'student') {
      Object.keys(teachers).forEach(teacher => {
        if(attendingRoom[room].includes(teacher)) {
          io.to(socket.id).emit('teacher is', peers[teacher])
        }
      })
    }
  })
 
  socket.on('coding', (code, room, userId) => {
    socket.to(room).broadcast.emit('sendingCode', code, userId)
    codeSessions[userId] = code
  })

  socket.on('runMinibrowser', (room, userName) => {
    socket.to(room).broadcast.emit('runMinibrowser', userName)
  })

  socket.on('changeTab', (room, html, css, js) => {
    socket.to(room).broadcast.emit('changeTab', html, css, js)
  })

  socket.on('callMe', (peerId, room) => {
    socket.to(room).broadcast.emit('callMe', peerId)
    peers[socket.id] = peerId
  })


  socket.on('disconnect', () => {
    const currentRoom = Object.keys(attendingRoom).find(key => attendingRoom[key].includes(socket.id))
    const peerLeaving = peers[socket.id]
    const teacherId = teachers[socket.id]
    socket.to(currentRoom).broadcast.emit('I quit', peerLeaving)
    if(teacherId){
      let html = ' '
      let css = ' '
      let js = ' ' 
      if(codeSessions[teacherId]){
        html = codeSessions[teacherId].html
        css = codeSessions[teacherId].css
        js = codeSessions[teacherId].js
      }

      Lesson.create({
        lesson: currentRoom,
        attending: [...new Set(attendingLesson[currentRoom])],
        html, 
        css, 
        js,
        library: currentRoom.split('-')[0],
        teacher: teacherId,
        updated: new Date()
      }).then(lessonCreated => console.log(lessonCreated))
        .catch(err => console.error(err))
      delete teachers[socket.id]
      delete peers[socket.id]
    }
  })
})
/**
 * Middlewares
 */
const corsOptions = { origin: process.env.FRONTEND_URL, credentials: true };
app.use(cors(corsOptions));
app.use(logger("dev")); // This logs HTTP reponses in the console.
app.use(express.json()); // Access data sent as json @req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }), // Persist session in database.
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Test to see if user is logged In before getting into any router.
app.use(function (req, res, next) {
  console.log("User in session =>", req.session.currentUser);
  next();
});

/**
 * Routes
 */

const authRouter = require("./routes/auth")
const lessonsRouter = require("./routes/lessons")
const notesRouter = require("./routes/notes")

app.use("/api/auth", authRouter)
app.use("/api/lessons", lessonsRouter)
app.use("/api/notes", notesRouter)

// 404 Middleware
app.use((req, res, next) => {
  const error = new Error("Ressource not found.")
  error.status = 404
  next(err)
});

// Error handler middleware
// If you pass an argument to your next function in any of your routes or middlewares
// You will end up in this middleware
// next("toto") makes you end up here
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  console.log("An error occured");
  res.status(err.status || 500);
  if (!res.headersSent) {
    res.json(err);
  }
});

module.exports = app;
