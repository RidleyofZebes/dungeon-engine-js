import Player from "/res/src/player.js";
import InputHandler from "/res/src/input.js";
import Map from "/res/src/map.js";
import loadImages from "/res/src/load_resources.js";
import Screen from "/res/src/screen.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
context.imageSmootingEnabled = false;
context.scale(1, 1);

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let tileHeight = 25;
let tileWidth = 25;

let sprites = loadImages("./res/images/");
let map = new Map(100, 100, sprites);
map.generate();

let player = new Player(tileWidth, tileHeight, sprites);

new InputHandler(player, map);
let screen = new Screen(context, map);

let lastTime = 0;

function main(timestamp) {
  let dT = timestamp - lastTime;
  lastTime = timestamp;
  // context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  screen.drawBackdrop(context);
  screen.clearMap(context, map);
  map.drawMap(context);
  // player.update(dT);
  player.draw(context);
  screen.clearMiniMap(context);
  screen.clearTextBox(context);
  screen.clearMenuBox(context);
  context.drawImage(sprites.border, 0, 0);

  requestAnimationFrame(main);
}

requestAnimationFrame(main);
