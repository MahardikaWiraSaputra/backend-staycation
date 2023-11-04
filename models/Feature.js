const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = require('mongodb').ObjectId;

const featureSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  itemId: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Feature', featureSchema)