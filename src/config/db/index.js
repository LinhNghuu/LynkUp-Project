const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://linhnhl3110:IOIIZA7MdRJz3Gti@cluster0.mpchkpa.mongodb.net/Web322-Project?retryWrites=true&w=majority');
    console.log('Connect successfully!!');
  } catch (error) {
    console.log('Connect Failure!!');
  }
}

module.exports = { connect };
