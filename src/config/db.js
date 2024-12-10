const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_USER)
    console.log('Conectado con éxito a la BBDD')
  } catch (error) {
    console.log('Error en la conexión con la BBDD')
  }
}

module.exports = { connectDB }
