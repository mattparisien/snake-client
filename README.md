# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Disclaimer

**This project by [Matthew Parisien](https://github.com/mattparisien) was conducted as part of the [Lighthouse Labs](https://github.com/lighthouse-labs) learning curriculum.**


## Credits

This game is inspired by the game [Snek](https://store.steampowered.com/app/765590/Coop_SNEK_Online/) created by [Tania Rascia](https://www.taniarascia.com/). The server code for this game was not written from scratch -  it is a refashioned version of Rascia's game.

## Final Product

![<img width="893" alt="snake-game-interface" src="https://user-images.githubusercontent.com/63109316/129914344-4b7eac24-355c-439a-92ee-2e15f845855e.png">](#)
!["screenshot description"](#)



## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## File Structure & Description 
***

### **[client.js](https://github.com/mattparisien/snake-client/blob/main/client.js)**
* This file sets up the client for a successful connection to the game server. 
* Contains a the connect function, which relies on node's net module to initiate a TCP connection with the server.

### **[constants.js](https://github.com/mattparisien/snake-client/blob/main/constants.js)**
* This file isolates all of the project's constant data, which circumvents hard-coding practices and allows for effective project structuring. 
* You may modify the data in this file and the other files should respond accordingly. 

### **[input.js](https://github.com/mattparisien/snake-client/blob/main/input.js)**
* This file handles all of the user input on the client side.
The following functions have been implemented: 
* setUpInput(): Sets up user input using the process object and its standardIn property, also establishing a connection to the server using the conn object in clients.js. This function uses the 'data' event handler to listen for input data from the user, and returns the handleUserInput() function, which will initiate a specific action or message, if the data matches the conditions of handleUserInput().
* handleUserInput(): Waits for user to press a computer key, and loops through two objects in constants.js to match the key with a key-value pair. The moves object has snake movements set as its values, while its keys correspond to the computer keys themselves. Similarly, the msgMappings object contains strings as values, which will be printed if the string's corresponding key matches the computer key pressed by the user. 

### **[play.js](https://github.com/mattparisien/snake-client/blob/main/play.js)**
* This file is in charge of game initiation. It is responsible for calling setUpInput(), and includes an invokation of the connect function as its argument. This double invokation triggers a connection between the process object, located inside of setUpInput, and the connect object - which allows for the user's input to be recognized as client input.

