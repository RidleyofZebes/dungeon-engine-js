const CARDINALS = ["N", "E", "S", "W"];

export default class Player {
  constructor(game) {
    this.width = game.camera.zoom;
    this.height = game.camera.zoom;
    this.sprites = {
      n: game.sprites.player_n,
      e: game.sprites.player_e,
      s: game.sprites.player_s,
      w: game.sprites.player_w
    };
    this.icon = game.sprites.player_n;
    this.position = {
      x: 1,
      y: 1
    };
    this.oldPosition = Object.assign({}, this.position);
    this.stepSize = 1;
    this.facing = "N";
    this.journal = ["Welcome to Dungeon Engine!"];
  }

  turn(turnDir) {
    let direction = CARDINALS.indexOf(this.facing);
    if (turnDir === "left") direction -= 1;
    if (direction < 0) direction = 3;
    if (turnDir === "right") direction += 1;
    if (direction > 3) direction = 0;
    this.facing = CARDINALS[direction];

    if (this.facing === "N") this.icon = this.sprites.n;
    if (this.facing === "E") this.icon = this.sprites.e;
    if (this.facing === "S") this.icon = this.sprites.s;
    if (this.facing === "W") this.icon = this.sprites.w;
  }

  moveForward(game) {
    switch (this.facing) {
      case "N":
        this.position.y -= this.stepSize;
        break;
      case "E":
        this.position.x += this.stepSize;
        break;
      case "S":
        this.position.y += this.stepSize;
        break;
      case "W":
        this.position.x -= this.stepSize;
        break;
    }
  }

  moveBackward() {
    switch (this.facing) {
      case "N":
        this.position.y += this.stepSize;
        break;
      case "E":
        this.position.x -= this.stepSize;
        break;
      case "S":
        this.position.y -= this.stepSize;
        break;
      case "W":
        this.position.x += this.stepSize;
        break;
    }
  }

  checkCollision(game, direction) {
    let nextSQ = null;
    if (direction === "forward") {
      switch (this.facing) {
        case "N":
          nextSQ = game.map.squares[this.position.x][this.position.y - 1];
          break;
        case "E":
          nextSQ = game.map.squares[this.position.x + 1][this.position.y];
          break;
        case "S":
          nextSQ = game.map.squares[this.position.x][this.position.y + 1];
          break;
        case "W":
          nextSQ = game.map.squares[this.position.x - 1][this.position.y];
          break;
      }
    } else if (direction === "back") {
      switch (this.facing) {
        case "N":
          nextSQ = game.map.squares[this.position.x][this.position.y + 1];
          break;
        case "E":
          nextSQ = game.map.squares[this.position.x - 1][this.position.y];
          break;
        case "S":
          nextSQ = game.map.squares[this.position.x][this.position.y - 1];
          break;
        case "W":
          nextSQ = game.map.squares[this.position.x + 1][this.position.y];
          break;
      }
    }
    if (nextSQ === 1) {
      return "wall";
    } else {
      return "floor";
    }
  }

  writeJournal(message) {
    this.journal = [message, ...this.journal];
  }

  draw(context, game) {
    // context.fillStyle = "#000";
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);
    // context.drawImage(this.icon, this.oldPosition.x, this.oldPosition.y);
    context.drawImage(
      this.icon,
      game.camera.center.x,
      game.camera.center.y,
      game.camera.tileSize,
      game.camera.tileSize
    );
  }

  // update(dT) {
  //   if (this.oldPosition.x >= this.position.x) {
  //     this.oldPosition.x -= 20 / dT;
  //   }
  //   if (this.oldPosition.x <= this.position.x) {
  //     this.oldPosition.x += 20 / dT;
  //   }
  //   if (this.oldPosition.y <= this.position.y) {
  //     this.oldPosition.y += 20 / dT;
  //   }
  //   if (this.oldPosition.y >= this.position.y) {
  //     this.oldPosition.y -= 20 / dT;
  //   }
  // }
}
