const fs = require('fs');

// Exigence 1: Création du fichier "welcome.txt"
const welcomeContent = 'Hello Node';
const welcomeFileName = 'welcome.txt';

fs.writeFile(welcomeFileName, welcomeContent, (err) => {
  if (err) throw err;
  console.log(`Le fichier ${welcomeFileName} a été créé avec succès!`);

  // Exigence 2: Lecture et affichage du contenu du fichier "welcome.txt"
  fs.readFile(welcomeFileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenu de ${welcomeFileName}:`);
    console.log(data);
  });
});
