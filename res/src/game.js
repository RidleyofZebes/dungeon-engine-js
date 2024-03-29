import Player from "./player.js";
import InputHandler from "./input.js";
import Map from "./map.js";
import { loadImages, loadFonts, loadJson } from "./load_resources.js";
import Screen from "./screen.js";
import Camera from "./camera.js";

export default class Game {
  constructor() {}

  async load() {
    this.sprites = loadImages("../res/images/");
    this.fonts = loadFonts("../res/fonts/");
    this.data = await loadJson("../res/json/");
  }

  async start(context) {
    await this.load();
    this.context = context;
    this.camera = new Camera(this);
    this.map = new Map(100, 100, this);
    this.map.generate(this);
    this.player = new Player(this);
    this.screen = new Screen(this);

    // this.gameObjects = [this.player, this.map, this.camera, this.screen];

    //   this.fonts = loadFonts;

    new InputHandler(this);
  }

  update() {}

  async draw(ctx) {
    this.screen.drawBackdrop(ctx);
    this.screen.clearMap(ctx, this.map);
    this.map.drawMap(ctx, this);
    this.player.draw(ctx, this);
    this.screen.clearMiniMap(ctx);
    this.screen.clearTextBox(ctx);
    this.screen.clearMenuBox(ctx);
    ctx.drawImage(this.sprites.border, 0, 0);
    this.screen.message(this.player.journal[0], this.context, this.fonts);
  }
}
