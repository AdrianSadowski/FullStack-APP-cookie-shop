const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  image: {type: String},
  promoted: {type: Boolean},
});

module.exports = mongoose.model('Product', productSchema);
