const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Person = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 29 },
  position: { type: String, default: 'student' },
  education: { type: String, default: 'Seceka College' },
  location: { type: String, default: 'TORONTO, CANADA' },
  status: { type: String, default: 'Say something' },
  description: { type: String, default: 'Say something' },
  img: { type: String, default: '../img/xxxSimp.jpeg' },
  slug: {
    type: String,
    default: function () {
      return this.name;
    },
    unique: true,
  },
  date: { type: Date, default: Date.now },
});

//Add plugin
Person.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Person', Person);
