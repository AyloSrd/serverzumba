const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum:['teacher', 'student'] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
