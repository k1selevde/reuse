const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'rupert.spinka62@ethereal.email',
        pass: 'U3DBRRfRvjCHAYqc8m'
    }
});


const mailer = message => {
    transporter.sendMail(message, (err,info) => {
        if (err) return console.log(err);
        console.log("Email sent, ", info)
    })
}

module.exports = mailer