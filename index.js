require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db.js')
const bookShopRouter = require('./src/api/routes/bookShop.js')
const bookRouter = require('./src/api/routes/book.js')

const app = express()
connectDB()
// la siguiente linea configura el servidor para que pueda recibir res.body en formato json
app.use(express.json())

app.use('/api/v1/bookShops', bookShopRouter)
app.use('/api/v1/books', bookRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3001, () => {
  console.log('Conectando con http://localhost:3001')
})
