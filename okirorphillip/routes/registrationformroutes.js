const express=require('../node_modules/express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Registration=require('../model/registrationmodel')

//registration
router.get('/', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.sendFile("registration_form.html", { root: view });
  })
  
  router.post('/', async (req, res) => {
    //outputs the form values in the console
    // console.log(req.body);
    // res.redirect('/');
    const registrationmodel = new Registration(req.body);
    try {
      await registrationmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })
  module.exports=router;