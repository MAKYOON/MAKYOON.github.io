const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    service: 'gmail',
    auth: {
        user: process.env.email, // your email address to send email from
        pass: process.env.password // your gmail account password
    }
});

module.exports = transporter;