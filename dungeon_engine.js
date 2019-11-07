import Player from "/res/src/player.js";
import InputHandler from "/res/src/input.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let tileHeight = 25;
let tileWidth = 25;

let doorSprite = document.getElementById("door");
let wallSprite = document.getElementById("wall");
let playerSprite = document.getElementById("player");

let player = new Player(GAME_WIDTH, GAME_HEIGHT, tileWidth, tileHeight, playerSprite);

new InputHandler(player);

let lastTime = 0;

function main(timestamp) {
  let dT = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, 1280, 720);
  player.update(dT);
  player.draw(context);

  requestAnimationFrame(main);
}

main();
