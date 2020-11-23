const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  lesson: String,
  attending: [Schema.Types.ObjectId],
  html: String,
  css: String,
  js: String,
  library: String,
  updated: { type: Date, default: Date.now },
  teacher: { type: Schema.Types.ObjectId, ref:'User' }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
