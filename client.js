const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    port: 50541,
    host: 'localhost'
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    conn.write('Name: MP')
  });


  conn.setEncoding('utf8'); //interpret data as txt

  return conn;
};

module.exports = {
  connect
}