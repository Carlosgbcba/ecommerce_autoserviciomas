const mongoose = require('mongoose')


const ProductsScheme = new mongoose.Schema(
{
    name: {
      type: String,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
    photoId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('products', ProductsScheme)