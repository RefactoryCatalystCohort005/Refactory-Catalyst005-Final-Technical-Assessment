const mongoose = require('mongoose');

const registrationsSchema = new mongoose.Schema({
    surname: String,
    givenname: String,
    date: String,
    placeofresidence: String,
    occupation: String,
    nationality: String,
    male: String,
    female: String,
    category: String,
  });

module.exports = mongoose.model('Registration', registrationsSchema); 