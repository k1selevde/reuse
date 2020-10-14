const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')


//import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {  useUnifiedTopology: true, useNewUrlParser: true } ,() => console.log('connected to DB!')
);



//Middleware

// parse body request
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)



app.listen(3000, () => console.log('Server up and start'))