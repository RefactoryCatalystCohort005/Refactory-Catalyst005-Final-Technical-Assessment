const mongoose = require('mongoose');

// Item object
const formSchema = new mongoose.Schema({
    surname: String,
    gname: String,
    dob: String,
    por: String,
    occ: String,
    nationality: String,
    female: String,
    male: String,
    category: String
});
 
module.exports = mongoose.model('Form', formSchema);