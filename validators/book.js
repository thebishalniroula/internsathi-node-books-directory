const Joi = require("joi");

function validateNewBook(book) {
  const bookEntrySchema = Joi.object({
    title: Joi.string().required(),
    authors: Joi.array().items(Joi.string()).min(1).required(),
    description: Joi.string().required(),
    publishYear: Joi.number()
      .min(1000)
      .max(new Date().getFullYear())
      .required(),
  });
  return bookEntrySchema.validate(book);
}

module.exports = { validateNewBook };
