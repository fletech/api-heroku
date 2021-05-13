const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  subject: String,
  message: String,
  name: String,
  email: String,
  date: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
});

module.exports = mongoose.model("Message", messageSchema, "messages");
