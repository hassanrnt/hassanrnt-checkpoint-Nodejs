const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
  // En-têtes de la réponse
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Contenu de la réponse
  res.end('<h1>Hello Node !!! </h1>\n');
});

// Écoute du serveur sur le port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
