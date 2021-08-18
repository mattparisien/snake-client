const IP =  '192.168.0.158';
const PORT = 50541;

const moves = {
  moveUp: 'w',
  moveLeft: 'a',
  moveDown: 's',
  moveRight: 'd',  
};

const msgMappings = {
  b: 'I\'m winning this game!',
  z: 'I like bananas!',
  y: 'I really suck at this'
}

module.exports = {
  IP,
  PORT,
  moves, 
  msgMappings
};