export default class Map {
  constructor(mapRows, mapCols, game) {
    this.rows = mapRows;
    this.cols = mapCols;
    this.sprites = game.sprites;
    this.squares = [];
  }

  generate() {
    let limits = [0, this.cols - 1, this.rows - 1];
    for (let c = 0; c < this.cols; c++) {
      this.squares[c] = [];
      for (let r = 0; r < this.rows; r++) {
        if (limits.includes(c) || limits.includes(r)) {
          this.squares[c][r] = 2;
        } else {
          this.squares[c][r] = 1;
        }
      }
    }
    return this.squares;
  }

  drawMap(context, game) {
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        context.drawImage(
          this.sprites[game.data.tiles[this.squares[i][j]].icon],
          game.camera.tileSize * i + game.camera.offset.x,
          game.camera.tileSize * j + game.camera.offset.y,
          game.camera.tileSize,
          game.camera.tileSize
        );
        // switch (this.squares[i][j]) {
        //   case 0:
        //     context.drawImage(
        //       this.sprites.stone_floor,
        //       game.camera.tileSize * i + game.camera.offset.x,
        //       game.camera.tileSize * j + game.camera.offset.y,
        //       game.camera.tileSize,
        //       game.camera.tileSize
        //     );
        //     break;
        //   case 1:
        //     let tileData = this.squares[i][j];
        //     // console.log(game.data.tiles);
        //     context.drawImage(
        //       this.sprites.stone_wall,
        //       game.camera.tileSize * i + game.camera.offset.x,
        //       game.camera.tileSize * j + game.camera.offset.y,
        //       game.camera.tileSize,
        //       game.camera.tileSize
        //     );
        //     break;
        // }
      }
    }
  }
}
