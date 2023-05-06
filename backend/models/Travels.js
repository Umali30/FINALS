const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let travelSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  destination: {
    type: String
  },
  payment: {
    type: String
  },
}, {
  collection: 'travel'
})
module.exports = mongoose.model('Travels', travelSchema)