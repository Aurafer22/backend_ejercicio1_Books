const {
  getBook,
  postBook,
  putBook,
  deleteBook,
  getOneBook
} = require('../controllers/book')

const bookRouter = require('express').Router()

bookRouter.get('/', getBook)
bookRouter.get('/:id', getOneBook)
// bookRouter.get('/author', getByAuthor)
bookRouter.post('/', postBook)
bookRouter.put('/:id', putBook)
bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
