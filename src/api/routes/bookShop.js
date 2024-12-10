const {
  getBookShop,
  postBookShop,
  putBookShop,
  deleteBookShop
} = require('../controllers/bookShop')

const bookShopRouter = require('express').Router()

bookShopRouter.get('/', getBookShop)
bookShopRouter.post('/', postBookShop)
bookShopRouter.put('/:id', putBookShop)
bookShopRouter.delete('/:id', deleteBookShop)

module.exports = bookShopRouter
