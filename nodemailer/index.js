const express = require('express');
const bodyParser = require('body-parser')


const app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }))

let user = undefined;

app.post('/registration', (req,res) => {
    if (!req.body.email || !req.body.password) return res.sendStatus(400)
    console.log(req.body)
    user = req.body
    res.send('Регистрация успешна')
    res.redirect('/registration')
})

app.get('/registration', (req,res) => {
    if (typeof user !== 'object') return res.sendFile(__dirname + '/registration.html')
    res.send('Регистрация успешна')
    user = undefined
})

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))