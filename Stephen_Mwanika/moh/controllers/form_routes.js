// Importing dependencies
const express = require('express');

// Link
const Form = require('../models/form');

// Creating a Router
const router = express.Router();

// Gets and displays the form
router.get('/', (req, res) => {
  res.render('form');
});

// Post request to the database using "save function"
router.post('/', (req, res) => {
  const form = new Form(req.body);
  form.save()
  .then(() => {res.redirect('/');})
  .catch((err) => {
    console.log(err);
    res.send('Sorry! Your entry was not saved in the database.');
  });
});

//
module.exports = router;