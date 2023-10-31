const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
const server = () => {
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)    
    })
}

server()

