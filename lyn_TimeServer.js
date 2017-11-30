// The net module has a method named net.createServer() that takes a
// function. The function that you need to pass to net.createServer() is a
// connection listener that is called more than once. Every connection
// received by your server triggers another call to the listener. The
// listener function has the signature:
const net = require('net');

function addZero (i) {
  return (i < 10 ? '0' : '') + i
}

function time () {
  const d = new Date()
  return d.getFullYear() + '-' +
    addZero(d.getMonth() + 1) + '-' +
    addZero(d.getDate()) + ' ' +
    addZero(d.getHours()) + ':' +
    addZero(d.getMinutes())
}

// net.createServer() also returns an instance of your server. You must call
// server.listen(portNumber) to start listening on a particular port.
const server = net.createServer(function listener(socket) {
  socket.end(time() + '\n')
});

server.listen(Number(process.argv[2]));