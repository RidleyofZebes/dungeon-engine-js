export default class Map {
  constructor(mapRows, mapCols, game) {
    this.rows = mapRows;
    this.cols = mapCols;
    this.sprites = game.sprites;
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

  drawMap(context, game) {
    const CENTER = { x: 468, y: 218 };
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        switch (this.squares[i][j]) {
          case 0:
            context.drawImage(
              this.sprites.stone_floor,
              game.camera.tileSize * i + game.camera.offset.x + CENTER.x,
              game.camera.tileSize * j + game.camera.offset.y + CENTER.y
            );
            break;
          case 1:
            context.drawImage(
              this.sprites.stone_wall,
              game.camera.tileSize * i + game.camera.offset.x + CENTER.x,
              game.camera.tileSize * j + game.camera.offset.y + CENTER.y
            );
            break;
        }
      }
    }
  }
}
