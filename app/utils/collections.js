const mongoose = require('mongoose')

// import the model
const Movies = require('../models/movies-model')

const createCollections = ()=>{
    try{
        Movies.createCollection()
        console.log("Movies collection created successfully")
    } catch(error){
        console.error("Error creating collection", error)
    } finally{
        mongoose.connection.close()
    }
}

// run the function
createCollections()