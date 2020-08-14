// Importing App dependencies
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');


const expressSession = require('express-session') ({
  secret: 'secret', // Don't reveal user's info
  resave: false, 
  saveUninitialized: false
});

// App Controllers
const formController = require('./controllers/form_routes');

const app = express();

// Establishing database connection
mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

// Pug set as the templating engine for View
app.set('view engine', 'pug');
app.set('views', './views');

// Using dependencies imported earlier
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession);

app.use('/', formController);

/* 
Multiple static directories
Serving static files with middleware function express.static
*/
app.use(express.static('static/css'));
app.use(express.static('static/js'));
app.use(express.static('static/img'));

// Handling non-existing routes
app.get('*', (req, res) => {
  res.send('Error! Did not find that resource!');
});

// Server listening to requests
app.listen(3000, () => {
  console.log('listening on port 3000');
});