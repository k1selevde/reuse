const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    rate: Number,
    directorId: String,
    watched: Boolean,
})


module.exports =  mongoose.model('Movie', movieSchema)