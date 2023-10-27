const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Person = new Schema({
  name: { type: String },
  age: { type: Number },
  description: { type: String },
  img: { type: String },
  avatar: { type: String },
  slug: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', Person);
