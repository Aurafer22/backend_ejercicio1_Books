const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bookShopSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    adress: { type: String, required: true, trim: true },
    phone: { type: Number, trim: true },
    website: { type: String, trim: true }
  },
  { timestamps: true }
)
const BookShop = mongoose.model('bookShops', bookShopSchema, 'bookShops')
module.exports = BookShop
