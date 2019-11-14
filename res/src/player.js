const CARDINALS = ["N", "E", "S", "W"];

export default class Player {
  constructor(width, height, sprites) {
    this.width = width;
    this.height = height;
    this.sprites = {
      n: sprites.player_n,
      e: sprites.player_e,
      s: sprites.player_s,
      w: sprites.player_w
    };
    this.icon = this.sprites.n;
    this.position = {
      x: 15,
      y: 15
    };
    this.oldPosition = Object.assign({}, this.position);
    this.stepSize = 25;
    this.facing = "N";
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

  // moveForward() {
  //   switch (this.facing) {
  //     case "N":
  //       this.position.y -= this.stepSize;
  //       break;
  //     case "E":
  //       this.position.x += this.stepSize;
  //       break;
  //     case "S":
  //       this.position.y += this.stepSize;
  //       break;
  //     case "W":
  //       this.position.x -= this.stepSize;
  //       break;
  //   }
  // }

  // moveBackward() {
  //   switch (this.facing) {
  //     case "N":
  //       this.position.y += this.stepSize;
  //       break;
  //     case "E":
  //       this.position.x -= this.stepSize;
  //       break;
  //     case "S":
  //       this.position.y -= this.stepSize;
  //       break;
  //     case "W":
  //       this.position.x += this.stepSize;
  //       break;
  //   }
  // }

  draw(context) {
    context.fillStyle = "#000";
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);
    // context.drawImage(this.icon, this.oldPosition.x, this.oldPosition.y);
    context.drawImage(
      this.icon,
      this.position.x * this.width,
      this.position.y * this.height
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
