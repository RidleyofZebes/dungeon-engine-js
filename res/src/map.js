export default class Map {
  constructor(mapRows, mapCols, sprites) {
    this.rows = mapRows;
    this.cols = mapCols;
    this.sprites = sprites;
    this.tileSize = 25;
    this.squares = [];
    this.offset = {
      x: 0,
      y: 0
    };
  }

  generate() {
    let limits = [0, this.cols - 1, this.rows - 1];
    for (let c = 0; c < this.cols; c++) {
      this.squares[c] = [];
      for (let r = 0; r < this.rows; r++) {
        if (limits.includes(c) || limits.includes(r)) {
          this.squares[c][r] = 1;
        } else {
          this.squares[c][r] = 0;
        }
      }
    }
    return this.squares;
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

  drawMap(context) {
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        switch (this.squares[i][j]) {
          case 0:
            context.drawImage(this.sprites.stone_floor, this.tileSize * i + this.offset.x, this.tileSize * j + this.offset.y);
            break;
          case 1:
            context.drawImage(this.sprites.stone_wall, this.tileSize * i + this.offset.x, this.tileSize * j + this.offset.y);
            break;
        }
      }
    }
  }
}
