const fs = require('fs');

// Création du fichier "hello.txt"
const helloContent = 'Hello Node';
const helloFileName = 'hello.txt';

fs.writeFile(helloFileName, helloContent, (err) => {
  if (err) throw err;
  console.log(`Le fichier ${helloFileName} a été créé avec succès!`);

  // Lecture et affichage du contenu du fichier "hello.txt"
  fs.readFile(helloFileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenu de ${helloFileName}:`);
    console.log(data);
  });
});
