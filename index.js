const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const moviesController = require('./app/controllers/movies-controller.js')

const port = 4000

app.use(express.json())



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
})


app.use('/', moviesController)