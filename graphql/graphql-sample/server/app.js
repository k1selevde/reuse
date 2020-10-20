const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');
const schema = require('../server/schema/schema')
dotenv.config()

const app = express()
const PORT = 3005;


mongoose.connect('mongodb+srv://den:den123@cluster0.avbsr.mongodb.net/sample?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true })

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(PORT, err => {
    err ? console.log(err) : console.log('server has been started')
})