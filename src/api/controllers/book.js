const mongoose = require('mongoose')
const Book = require('../models/book.js')

const getBook = async (req, res, next) => {
  try {
    const allBook = await Book.find().populate('bookShops')
    return res.status(200).json(allBook)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const oneBook = await Book.findById(id).populate('bookShops')
    return res.status(200).json(oneBook)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const postBook = async (req, res, next) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      image: req.body.image,
      description: req.body.description
    })
    if (newBook) {
      return res.status(400).json('Este libro YA EXISTE!')
    }
    const bookCreated = await newBook.save()
    return res.status(200).json(bookCreated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const { bookShops } = req.body
    if (!bookShops) {
      return res.status(404).json('No hay librerías relacionadas')
    }
    const oldBook = await Book.findById(id)
    if (!oldBook) {
      return res.status(404).json('El libro no existe')
    }
    const bookUpdated = await Book.findByIdAndUpdate(
      id,
      { $addToSet: { bookShops: { $each: bookShops } } },
      {
        new: true
      }
    )
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
