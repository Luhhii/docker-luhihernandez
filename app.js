const http = require('http');

const server = http.createServer((req, res) => {
  res.end('¡Hola desde Docker Luhi Hernandez');
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
