const express = require("express");
const router = express.Router();
const {
  getBooks,
  addNewBook,
  deleteBook,
} = require("../controllers/bookControllers");

router.get("/", getBooks);
router.post("/", addNewBook);
router.delete("/", deleteBook);

module.exports = router;
