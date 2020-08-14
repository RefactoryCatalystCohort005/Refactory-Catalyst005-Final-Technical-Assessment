console.log('Hello, World! Node is working...')

const express = require('./node_modules/express')

const path = require('path');
// const indexRoutes=require('./routes/indexroutes')
const registrationformRoutes=require('./routes/registrationformroutes')



const bodyParser= require('./node_modules/body-parser')


const expressSession = require('./node_modules/express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

  
  require('./node_modules/dotenv/types').config();
  const mongoose = require('mongoose');

  const Registration=require('./model/registrationmodel');



  const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });


  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

var view = "./views/"
//calling html file in the view folder this helps in using html if you dont want to use Pug.
// var view = "./views/";

app.set('view engine', 'pug')
app.set('views', './views');


app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(expressSession);

app.use(express.static(path.join(__dirname, "public")));


require('./model/registrationmodel');


//Registering use of middleware.
// app.use('/',indexRoutes);
app.use('/',registrationformRoutes);


//When a wrong path is accessed.
app.get('*', (req, res) => {
    res.send('ERROR')
  })
  
  // Listening for requests: the server!
  app.listen(3000, () => {
    console.log(`Express running → PORT 3000`);
  });
