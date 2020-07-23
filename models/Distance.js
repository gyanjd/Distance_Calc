const mongoose = require('mongoose');

const DistanceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  unq_id: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  },
  d_time: {
    type: String,
    required: true
  },
  d_date: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('distance', DistanceSchema);