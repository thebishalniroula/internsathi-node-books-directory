const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
