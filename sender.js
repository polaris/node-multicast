var dgram = require('dgram');

var host = '230.1.2.3';
var port = 4002;

var socket = dgram.createSocket('udp4');

var message = process.argv.length >= 3 ? process.argv[2] : '...';

var buffer = new Buffer(message);

socket.send(buffer, 0, buffer.length, port, host, function (err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + host +':'+ port);
    socket.close();
});