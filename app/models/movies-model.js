const mongoose = require('mongoose')
// create the schema

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


module.exports = Movies