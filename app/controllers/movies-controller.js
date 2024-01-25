const express = require('express')
const router = express.Router()

// import the model
const Movies = require('../models/movies-model')


router.get('/savedMovies',(req, res)=>{
    Movies.find({}).then((movies)=>{
        res.status(200).json(movies)
    }).catch(error=>{
        console.log(error)
        res.status(500).json(error.message)
    })
})

router.post('/movie',async (req, res)=>{
    try{
        const {title} = req.body
        const addMovie = new Movies({title})
        // save the movie
        const saveMovie = await addMovie.save()
        res.status(200).json({success: true, id:saveMovie._id})
    } catch(error){
        res.status(500).json({success: false, error:error.message})
    }
})

router.put('/watchMovie/:id', async (req, res)=>{
    try{
        const movieId = req.params.id
        await Movies.findByIdAndUpdate(movieId, {watched: true})
        res.status(200).json({success: true, message: "Movie marked as watched"})
    } catch(error){
        res.status(500).json({success:false, error: error.message})
    }
})

module.exports = router