let doorSprite = document.getElementById("door");
let wallSprite = document.getElementById("wall");
let floorSprite = document.getElementById("floor");

export default class Map {
  constructor(mapRows, mapCols) {
    this.rows = mapRows;
    this.cols = mapCols;
    this.tileSize = 25;
    this.squares = [];
    this.offset = {
      x: 0,
      y: 0
    };
  }

  generate() {
    for (let c = 0; c < this.cols; c++) {
      this.squares[c] = [];
      for (let r = 0; r < this.rows; r++) {
        this.squares[c][r] = 0;
      }
    }
  }

  drawMap(context) {
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        switch (this.squares[i][j]) {
          case 0:
            context.drawImage(floorSprite, this.tileSize * i + this.offset.x, this.tileSize * j + this.offset.y);
            break;
          case 1:
            console.log("wall");
            break;
        }
      }
    }
  }
}
