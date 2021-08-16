const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};


const setUpInput = function() {
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