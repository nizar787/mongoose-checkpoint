const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  url: {
    type: string,
    required: true,
  },
  description: {
    type: string,
  },
})

module.exports = product = mongoose.model('product', productScheme)
