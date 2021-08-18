const IP =  '192.168.0.158';
const PORT = 50541;

const moves = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};

const msgMappings = {
  b: 'Say: I\'m winning this game!',
  z: 'Say: I like bananas!',
  y: 'Say: I really suck at this.'
};

module.exports = {
  IP,
  PORT,
  moves,
  msgMappings
};