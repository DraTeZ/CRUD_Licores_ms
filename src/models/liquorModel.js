const mongoose = require('mongoose');

const liquorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  EAN: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String},
  additional_attributes: { type: String }
});

module.exports = mongoose.model('Liquor', liquorSchema);
