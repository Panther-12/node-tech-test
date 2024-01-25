const mongoose = require('mongoose')

const createCollections = ()=>{
    const MovieSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        watched: { 
            type: Boolean,
            default: false
        }
    })

    // create a model from the schema
    const Movies = mongoose.model("Movies", MovieSchema)
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