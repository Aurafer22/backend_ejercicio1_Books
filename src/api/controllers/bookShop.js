const mongoose = require('mongoose')
const BookShop = require('../models/bookshop')

const getBookShop = async (req, res, next) => {
  try {
    const allBookShop = await BookShop.find().populate('books')
    return res.status(200).json(allBookShop)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getOneBookShop = async (req, res, next) => {
  try {
    const { id } = req.params
    const oneBookShop = await BookShop.findById(id).populate('books')
    return res.status(200).json(oneBookShop)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postBookShop = async (req, res, next) => {
  try {
    const newBookShop = await new BookShop({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website
    })
    if (newBookShop) {
      return res.status(400).json('Esta librería YA EXISTE!')
    }
    const createdBookShop = await newBookShop.save()
    return res.status(201).json(createdBookShop)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putBookShop = async (req, res, next) => {
  try {
    const { id } = req.params
    const { books } = req.body
    const oldBookShop = await BookShop.findById(id)
    if (!oldBookShop) {
      return res.status(404).json('Librería inexistente')
    }
    if (!books) {
      return res.status(404).json('No hay libros relacionados')
    }
    const bookShopUpdated = await BookShop.findByIdAndUpdate(
      id,
      { $addToSet: { books: { $each: books } } },
      { new: true }
    )
    return res.status(200).json(bookShopUpdated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteBookShop = async (req, res, next) => {
  try {
    const { id } = req.params
    await BookShop.findByIdAndDelete(id)
    return res.status(200).json('Librería eliminada!')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getBookShop,
  getOneBookShop,
  postBookShop,
  putBookShop,
  deleteBookShop
}
