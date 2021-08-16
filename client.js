//MOVEMENTS
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

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
    conn.write('Name: MP');

    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 50)

  });

  conn.setEncoding('utf8'); //interpret data as txt

  return conn;
};

module.exports = {
  connect
};