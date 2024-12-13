const books = require('../../data/book')
const { getOneBook } = require('../controllers/book')
const {
  getBookShop,
  postBookShop,
  putBookShop,
  deleteBookShop,
  getOneBookShop
} = require('../controllers/bookShop')

const bookShopRouter = require('express').Router()

bookShopRouter.get('/', getBookShop)
bookShopRouter.get('/:id', getOneBookShop)
bookShopRouter.post('/', postBookShop)
bookShopRouter.put('/:id', putBookShop)
bookShopRouter.delete('/:id', deleteBookShop)

module.exports = bookShopRouter
