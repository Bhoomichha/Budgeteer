require('dotenv').config();


//Imports
const mongoose = require('mongoose');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { db } = require('./server/config/db.js'); 
const session = require("express-session"); 
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();

app.use(passport.initialize());
//app.use(passport.session());

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Static files
app.use(express.static('public'));
// Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./server/routes/index.js'));
app.use('/', require('./server/routes/dashboard.js'));
app.use('/', require('./server/routes/auth.js'));


//Handle 404 
app.get('*', function(req, res){ 
  
  res.status(404).render('404');
})


const PORT = process.env.PORT
const server = () => {
  db()
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)    
    })
}

server()

