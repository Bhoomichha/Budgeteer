const express = require('express')
const cors = require('cors')
const app = express()
const { db } = require('./db/db.js'); 

require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
  res.send('Hello World')  
})
const PORT = process.env.PORT
const server = () => {
  db()
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)    
    })
}

server()

