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
io.on('connection', socket => {
  socket.on('join', (room, socketId) => {
    console.log(`socket : ${socket.id}, peer : ${socketId}, joining room : ${room}`)
    socket.join(room)
    socket.to(room).broadcast.emit('classmate joined', socketId)
  })
 
  socket.on('coding', (code, room, socketId) => {
    console.log(`code: ${code.html}, room: ${room}, id : ${socket.id}, peerId : ${socketId}`)
    socket.to(room).broadcast.emit('sendingCode', code, socketId)
  })

  socket.on('runMinibrowser', (room, socketId) => {
    console.log(`Running browser, room: ${room}, id : ${socket.id}, peerId : ${socketId}`)
    socket.to(room).broadcast.emit('runMinibrowser', socketId)
  })

  socket.on('changeTab', (room, html, css, js) => {
    console.log(html, css, js)
    socket.to(room).broadcast.emit('changeTab', html, css, js)
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
