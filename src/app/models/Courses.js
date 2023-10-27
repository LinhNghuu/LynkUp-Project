const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String },
  age: { type: Number },
  bio: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
