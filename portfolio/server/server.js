const path = require('path')
const express = require('express');
const app = express();
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {

    try {
        //Ce formatage du texte est nécessaire pour le rendu du mail (sinon tout est décalé dans le mail)
        const mailOptions = {
            to: process.env.email,
            text: `Nom : ${req.body.name}
Email : ${req.body.email}
Objet: ${req.body.subject}
Message : 
            
` + req.body.message
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Erreur'
                });
            } else {
                res.send({
                    success: true,
                    message: "Merci de m'avoir contacté. Je vous répondrais dans les plus brefs délais."
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Erreur'
        });
    }
});

app.listen(3030, () => {
    console.log('server start on port 3030');
});