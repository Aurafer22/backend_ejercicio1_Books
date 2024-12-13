const mongoose = require('mongoose')
const Book = require('../models/book.js')

const getBook = async (req, res, next) => {
  try {
    const allBook = await Book.find()
    return res.status(200).json(allBook)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const oneBook = await Book.findById(id)
    return res.status(200).json(oneBook)
  } catch (error) {
    return res.status(400).json(error)
  }
}
// const getByAuthor = async (req, res, next) => {
//   try {
//     const { author } = req.params
//     const bookByAuthor = await Book.findOne(author)
//     return res.status(200).json(bookByAuthor)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }
const postBook = async (req, res, next) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      image: req.body.image,
      description: req.body.description
    })
    const bookCreated = await newBook.save()
    return res.status(200).json(bookCreated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookModify = new Book(req.body)
    bookModify._id = id
    const bookUpdated = await Book.findByIdAndUpdate(id, bookModify, {
      new: true
    })
    return res.status(200).json(bookUpdated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    await Book.findByIdAndDelete(id)
    return res.status(200).json('Libro eliminado!')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getBook,
  getOneBook,
  putBook,
  postBook,
  deleteBook
}
