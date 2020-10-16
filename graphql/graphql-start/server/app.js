const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const dotenv = require('dotenv')



const app = express()
const PORT = 3005;

dotenv.config();

//mongoose.connect(process.env.DB, {  useUnifiedTopology: true, useNewUrlParser: true } )
mongoose.connect('mongodb+srv://den:den123@cluster0.avbsr.mongodb.net/db?retryWrites=true&w=majority', {  useUnifiedTopology: true, useNewUrlParser: true } )




app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql: true
}));

dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`))
dbConnection.once(`open`, () => console.log('Connect to db'))

app.listen(PORT, err => {
    err ? console.log(err) : console.log('server started')
})