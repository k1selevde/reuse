const express = require('express')
const app = express()

//import Routes
const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)




app.listen(3000, () => console.log('Server up and start'))