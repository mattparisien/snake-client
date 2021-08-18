const { moves, msgMappings } = require('./constants');
let connection;

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  for (const button in moves) {
    if (button === key) {
      connection.write(moves[button]);
    }
  }

  for (const button in msgMappings) {
    if (button === key) {
      connection.write(msgMappings[button]);
    }
  }
};

const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data)  => {
    return handleUserInput(data);
  });
  return stdin;
};

module.exports = { setUpInput };
