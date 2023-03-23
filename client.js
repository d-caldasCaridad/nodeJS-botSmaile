/**
 * Módulo para crear una conexión de socket TCP con un servidor
 * en la dirección localhost:4004 y enviar mensajes al servidor cada 3 segundos.
 * @module clientSocket
 */

const net = require('net');

// Crea una conexión de socket TCP con el servidor en la dirección localhost:4004
const socketCli = net.createConnection({host: 'localhost' , port: 4004}, () => {
  console.log('Connected to server!');
});

// Establece la codificación de caracteres para la conexión del socket
socketCli.setEncoding('utf-8');

// Escucha los datos recibidos del servidor y los muestra en la consola
socketCli.on('data', (data) => {
  console.log(data);
});

// Maneja cualquier error que se produzca en la conexión del socket
socketCli.on('error', (err) => {
  console.error(`Socket error: ${err}`);
});

/**
 * Envía un mensaje al servidor a través de la conexión de socket.
 * @function sendMessage
 */
function sendMessage() {
  socketCli.write('Hi there!');
}

// Envía un mensaje al servidor cada 3 segundos
setInterval(sendMessage, 3001);
