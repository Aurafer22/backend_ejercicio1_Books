const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    author: { type: String, require: true, trim: true },
    year: { type: Number, trim: true },
    image: { type: String, requie: true, trim: true },
    description: { type: String, trim: true },
    bookShops: [{ type: mongoose.Types.ObjectId, ref: 'bookShops' }]
  },
  { timestamps: true }
)

const Book = mongoose.model('books', bookSchema, 'books')
module.exports = Book
