export default class Camera {
  constructor() {
    this.offset = {
      x: 0,
      y: 0
    };
    this.center = {
      x: 493,
      y: 243
    };
    this.tileSize = 25;
  }

  offsetCamera(facing, dir) {
    const CARDINALS = ["N", "E", "S", "W"];
    let offsetDirection = CARDINALS.indexOf(facing);
    switch (offsetDirection) {
      case 0:
        if (dir === "forward") {
          this.offset.y += this.tileSize;
        } else if (dir === "back") {
          this.offset.y -= this.tileSize;
        }
        break;
      case 1:
        if (dir === "forward") {
          this.offset.x -= this.tileSize;
        } else if (dir === "back") {
          this.offset.x += this.tileSize;
        }
        break;
      case 2:
        if (dir === "forward") {
          this.offset.y -= this.tileSize;
        } else if (dir === "back") {
          this.offset.y += this.tileSize;
        }
        break;
      case 3:
        if (dir === "forward") {
          this.offset.x += this.tileSize;
        } else if (dir === "back") {
          this.offset.x -= this.tileSize;
        }
        break;
    }
  }

  zoomIn(game) {
    this.tileSize = Math.min(this.tileSize * 1.2, 125);
    // this.offset.x = game.player.position.x * this.tileSize;
    // this.offset.y = game.player.position.y * this.tileSize;
  }

  zoomOut(game) {
    this.tileSize = Math.max(this.tileSize * 0.8, 1);
    // this.offset.x = game.player.position.x * this.tileSize;
    // this.offset.y = game.player.position.y * this.tileSize;
  }

  resetZoom(game) {
    this.tileSize = 25;
  }
}
