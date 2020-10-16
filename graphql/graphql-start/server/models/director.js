const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.Model

const directorSchema = new Schema({
    name: String,
    age: Number,
    movies: Array
})

module.exports = mongoose.model('Director', directorSchema )