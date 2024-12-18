const mongoose = require('mongoose')
const Book = require('../../api/models/book')
const books = require('../../data/book')

mongoose
  .connect(
    'mongodb+srv://aurafercomunicacion:6EVPSNQC9gGCirfW@cluster0.d1sm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allBooks = await Book.find()
    if (allBooks.length) {
      await Book.collection.drop()
    }
  })
  .catch((error) => console.log(`Error borrando colección: ${error}`))
  .then(async () => {
    await Book.insertMany(books)
  })
  .catch((error) => console.log(`Error creando datos: ${error}`))
  .finally(() => mongoose.disconnect())
