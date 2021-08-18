const { moves, msgMappings } = require('./constants');
let connection;

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  } else if (key === moves.moveUp) {
    connection.write('Move: up');
  } else if (key === moves.moveLeft) {
    connection.write('Move: left');
  } else if (key === moves.moveDown) {
    connection.write('Move: down');
  } else if (key === moves.moveRight) {
    connection.write('Move: right');
  }

  for (const button in msgMappings) {
    if (button === key) {
      connection.write(`Say: ${msgMappings[button]}`);
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
