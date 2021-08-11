const net = require('net');

const connect = function() {
  console.log('Connecting...')
  const conn = net.createConnection({
    port: 50541,
    host: 'localhost'
  });

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.setEncoding('utf8'); //interpret data as txt

  return conn;
};

connect();
