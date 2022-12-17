const express = require("express");
const router = express.Router();
const { getBooks, addNewBook } = require("../controllers/bookControllers");

router.get("/", getBooks);
router.post("/", addNewBook);

module.exports = router;
