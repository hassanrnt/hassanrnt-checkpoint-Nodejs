require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env
const nodemailer = require('nodemailer');

// Création d'un objet transporteur SMTP réutilisable
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Configuration du courriel
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'hassanritouny196@gmail.com',
  subject: 'Test d\'envoi d\'e-mail avec Nodemailer',
  text: 'Bonjour, Ceci est un test d\'envoi d\'e-mail avec Nodemailer.'
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail envoyé: ' + info.response);
  }
});
