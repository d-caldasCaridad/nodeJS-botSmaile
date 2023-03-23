const net = require('net');
// Importamos el módulo 'net' para crear un servidor TCP

// Creamos un servidor TCP
const server = net.createServer((socket) => {
  // La función de callback se ejecuta cada vez que hay una nueva conexión al servidor

  // Registramos la información del socket remoto (dirección IP y puerto)
  console.log(`Nueva conexión desde ${socket.remoteAddress}:${socket.remotePort}`);

  // Escuchamos los datos que recibe el socket
  socket.on('data', (data) => {
    // La función de callback se ejecuta cada vez que llegan datos al servidor
    console.log(`Mensaje recibido desde ${socket.remoteAddress}:${socket.remotePort}: ${data}`);

    // Enviamos una respuesta al cliente
    socket.write('Responsive');
  });

  // Escuchamos el evento 'close' que se dispara cuando el cliente cierra la conexión
  socket.on('close', () => {
    console.log(`Conexión con ${socket.remoteAddress}:${socket.remotePort} finalizada`);
  });

  // Escuchamos el evento 'error' que se dispara cuando ocurre un error en la conexión
  socket.on('error', (err) => {
    console.log(`Error en la conexión con ${socket.remoteAddress}:${socket.remotePort}: ${err.message}`);
  });
});

//  El servidor comienza a escuchar en el puerto 4004
server.listen(4004, () => {
  console.log(`El servidor está escuchando en el puerto ${server.address().port}`);
});
