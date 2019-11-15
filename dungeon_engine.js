import Game from "./res/src/game.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
context.imageSmootingEnabled = false;
context.scale(1, 1);

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let game = new Game();
game.start();

let tileHeight = 25;
let tileWidth = 25;

let lastTime = 0;

function main(timestamp) {
  game.update();
  game.draw(context);

  // function main(timestamp) {
  // let dT = timestamp - lastTime;
  lastTime = timestamp;
  // context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // player.update(dT);

  // screen.drawBackdrop(context);
  // screen.clearMap(context, map);
  // map.drawMap(context);
  // player.draw(context);
  // screen.clearMiniMap(context);
  // screen.clearTextBox(context);
  // screen.clearMenuBox(context);
  // context.drawImage(sprites.border, 0, 0);

  requestAnimationFrame(main);
}

requestAnimationFrame(main);
