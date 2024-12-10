require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db.js')
const bookShopRouter = require('./src/api/routes/bookShop.js')
const BookShop = require('./models/bookShop.js')

const app = express()
connectDB()
// la siguiente linea configura el servidor para que pueda recibir res.body en formato json
app.use(express.json())

app.use('/api/v1/bookShops', bookShopRouter)

app.listen(3000, () => {
  console.log('Conectando con http://localhost:3000')
})
