const Book = require("../Models/Book");
const { validateNewBook } = require("../validators/book");

//get a list of all the books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ success: true, data: books });
  } catch (error) {
    return res
      .status(503)
      .json({ success: false, message: "Could not complete request." });
  }
};

//register new book
const addNewBook = async (req, res) => {
  const { value, err } = validateNewBook(req.body);
  if (err) {
    return res.status(400).json({
      success: false,
      message: err.details[0],
    });
  }
  const book = new Book(req.body);

  try {
    const saved = await book.save();
    res.status(200).json({ success: true, data: saved });
  } catch (error) {
    res
      .status(503)
      .json({ success: false, message: "Could not complete request." });
  }
};

const deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.body.id);
  if (deletedBook) {
    return res.status(200).json({ success: true, data: deleteBook });
  }
  res.status(404).json({ success: false, message: "Data not found." });
};
module.exports = {
  getBooks,
  addNewBook,
  deleteBook,
};
