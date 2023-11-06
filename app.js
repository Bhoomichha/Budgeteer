require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const { db } = require('./db/db.js'); 

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Static files
app.use(express.static('public'));
// Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index.js'));

const PORT = process.env.PORT
const server = () => {
  db()
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)    
    })
}

server()
