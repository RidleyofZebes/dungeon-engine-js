export default class Camera {
  constructor() {
    this.offset = {
      x: 0,
      y: 0
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
}
