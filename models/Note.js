const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  lesson: String,
  updated: { type: Date, default: Date.now },
  student: { type: Schema.Types.ObjectId, ref:'User' },
  html: String,
  css: String,
  js: String,
  library: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
