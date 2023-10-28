const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Person = new Schema({
  name: { type: String, required: true},
  age: { type: Number, default: 29 },
  position: { type: String, default: 'student' },
  education: { type: String, default: 'Seceka College' },
  location: { type: String ,default: 'TORONTO, CANADA'},
  status: { type: String, default: 'Say something' },
  description: { type: String, default: 'Say something' },
  img: { type: String, default: '../img/xxxSimp.jpeg' },
  slug: { type: String, default: function() { return this.name; }, unique: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', Person);
