import Player from "/res/src/player.js";
import InputHandler from "/res/src/input.js";
import Map from "/res/src/map.js";
import loadImages from "/res/src/load_resources.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let tileHeight = 25;
let tileWidth = 25;

let sprites = loadImages("./res/images/");
let map = new Map(100, 100, sprites);
map.generate();

let player = new Player(map, tileWidth, tileHeight, sprites);

new InputHandler(player, map);

let lastTime = 0;

function main(timestamp) {
  let dT = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  map.drawMap(context);
  // player.update(dT);
  player.draw(context);

  requestAnimationFrame(main);
}

requestAnimationFrame(main);
