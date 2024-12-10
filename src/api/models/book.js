const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    year: { type: Number, trim: true },
    image: { type: String, requie: true, trim: true },
    description: { type: String, trim: true }
  },
  { timestamps: true }
)

const book = mongoose.model('book', bookSchema, 'book')
module.exports = book
