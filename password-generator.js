const fs = require('fs');
const generatePassword = require('generate-password');

// Configuration des options pour la génération de mot de passe
const passwordOptions = {
  length: 12, // Longueur du mot de passe
  numbers: true, // Inclure des chiffres
  symbols: true, // Inclure des symboles
  uppercase: true, // Inclure des majuscules
  lowercase: true, // Inclure des minuscules
  strict: true // Éviter les caractères similaires et les répétitions
};

// Fonction pour générer et stocker un mot de passe
const generateAndStorePassword = () => {
  // Générer le mot de passe
  const password = generatePassword.generate(passwordOptions);

  // Afficher le mot de passe dans la console
  console.log(`Mot de passe généré : ${password}`);

  // Stocker le mot de passe dans le fichier "password-generator.txt"
  fs.appendFile('password-generator.txt', `${password}\n`, (err) => {
    if (err) throw err;
    console.log('Mot de passe stocké dans password-generator.txt');
  });
};

// Appeler la fonction pour générer et stocker un mot de passe
generateAndStorePassword();
