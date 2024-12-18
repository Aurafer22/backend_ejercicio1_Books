const mongoose = require('mongoose')
const BookShop = require('../../api/models/bookshop')
const bookShops = require('../../data/bookShops')

mongoose
  .connect(
    'mongodb+srv://aurafercomunicacion:6EVPSNQC9gGCirfW@cluster0.d1sm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allBookShops = await BookShop.find()
    if (allBookShops.length) {
      await BookShop.collection.drop()
    }
  })
  .catch((error) => console.log(`Error al eliminar colección: ${error}`))
  .then(async () => {
    await BookShop.insertMany(bookShops)
  })
  .catch((error) => console.log(`Error al crear los datos: ${error}`))
  .finally(() => mongoose.disconnect())
