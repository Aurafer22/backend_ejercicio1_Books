const mongoose = require('mongoose')
const book = require('./models/book.js')

const getBook = async (req, res, next) => {
  try {
    const allBook = await book.find()
    return res.status(200).json(allBook)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postBook = async (req, res, next) => {
  try {
    const newBook = new book({
      title: req.body.title,
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
    const bookModify = new book(req.body)
    bookModify._id = id
    const bookUpdated = await book.findByIdAndUpdate(id, bookModify, {
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
    await book.findByIdAndDelete(id)
    return res.status(200).json('Libro eliminado!')
  } catch (error) {
    return res.status(400).json(error)
  }
}
