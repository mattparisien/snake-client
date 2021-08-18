const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    port: PORT,
    host: IP
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    console.log('Connected...');
    conn.write('Name: MP');
  });

  conn.setEncoding('utf8');
  return conn;
};

module.exports = { connect };