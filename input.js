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
  }
};

const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data)  => {
    if (data === 'm') {
      console.log('hey')
    }
    return handleUserInput(data);
  })
  return stdin;
};

module.exports = { setUpInput }
