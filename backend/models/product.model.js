const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  test: {type: String, required: true},
});

module.exports = mongoose.model('Product', productSchema);