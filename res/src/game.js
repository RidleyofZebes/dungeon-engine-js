import Player from "./player.js";
import InputHandler from "./input.js";
import Map from "./map.js";
import { loadImages, loadFonts } from "./load_resources.js";
import Screen from "./screen.js";
import Camera from "./camera.js";

export default class Game {
  constructor() {}

  start() {
    this.sprites = loadImages("../res/images/");
    this.camera = new Camera(this);
    this.map = new Map(100, 100, this);
    this.map.generate();
    this.player = new Player(this);
    this.screen = new Screen(this);

    // this.gameObjects = [this.player, this.map, this.camera, this.screen];

    //   this.fonts = loadFonts;

    new InputHandler(this);
  }

  update() {}

  draw(ctx) {
    this.screen.drawBackdrop(ctx);
    this.screen.clearMap(ctx, this.map);
    this.map.drawMap(ctx, this);
    this.player.draw(ctx, this);
    this.screen.clearMiniMap(ctx);
    this.screen.clearTextBox(ctx);
    this.screen.clearMenuBox(ctx);
    ctx.drawImage(this.sprites.border, 0, 0);
  }
}
