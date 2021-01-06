const express = require('express');
const bodyParser = require('body-parser')

const mailer = require('./nodemailer')

const app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }))

let user = undefined;

app.post('/registration', (req,res) => {
    if (!req.body.email || !req.body.password) return res.sendStatus(400)
    const message = {
        from: 'Mailer test <rupert.spinka62@ethereal.email>',
        to: req.body.email,
        subject: 'Вы успешно зарегистрировались',
        text: `Поздравляю вы успешно зарегистрировались
            ваши данные: 
            email: ${req.body.email};
            password: ${req.body.password};
            
            Данное письмо не требует ответа.
        `
    }
    mailer(message)
    user = req.body
    res.redirect('/registration')
})

app.get('/registration', (req,res) => {
    if (typeof user !== 'object') return res.sendFile(__dirname + '/registration.html')
    res.send('Регистрация успешна')
    user = undefined
})

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))