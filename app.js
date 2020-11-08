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
const { ExpressPeerServer } = require('peer')
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
const attendingLesson = {}
const attendingRoom = {}
const peers = {}
const io = require('socket.io')(server)
io.on('connection', socket => {
  socket.on('join', (room, userId) => {
    console.log(`socket : ${socket.id}, user : ${userId}, joining room : ${room}`)
    socket.join(room)
    socket.to(room).broadcast.emit('classmate joined', userId)
    if(!attendingLesson[room]) attendingLesson[room] = []
    attendingLesson[room].push(userId)
    if(!attendingRoom[room]) attendingRoom[room] = []
    attendingRoom[room].push(socket.id)
    console.log(attendingRoom)
  })
 
  socket.on('coding', (code, room, userName) => {
    console.log(`code: ${code.html}, room: ${room}, id : ${socket.id}, peerId : ${userName}`)
    socket.to(room).broadcast.emit('sendingCode', code, userName)
  })

  socket.on('runMinibrowser', (room, userName) => {
    console.log(`Running browser, room: ${room}, id : ${socket.id}, peerId : ${userName}`)
    socket.to(room).broadcast.emit('runMinibrowser', userName)
  })

  socket.on('changeTab', (room, html, css, js) => {
    console.log(html, css, js)
    socket.to(room).broadcast.emit('changeTab', html, css, js)
  })

  socket.on('callMe', (peerId, room) => {
    console.log('asking to be called', peerId)
    socket.to(room).broadcast.emit('callMe', peerId)
    peers[socket.id] = peerId
    console.log(peers)
  })


  socket.on('disconnect', () => {
    const currentRoom = Object.keys(attendingRoom).find(key => attendingRoom[key].includes(socket.id))
    const peerLeaving = peers[socket.id]
    socket.to(currentRoom).broadcast.emit('I quit', peerLeaving)
    console.log(peerLeaving)
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

const authRouter = require("./routes/auth");

app.use("/api/auth", authRouter);

// 404 Middleware
app.use((req, res, next) => {
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(err);
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
