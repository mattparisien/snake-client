let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up')
  } else if (key === 'a') {
    connection.write('Move: left')
  } else if (key === 's') {
    connection.write('Move: down') 
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (key === 'b') {
    connection.write('Say: Hey girl')
  } else if (key === 'z') {
    connection.write('Say: I\'m winning!')
  } else if (key === 'y') {
    connection.write('Say: I like bananas.')
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
  })
  return stdin;
};

module.exports = { setUpInput }
