const CARDINALS = ["N", "E", "S", "W"];

export default class Player {
  constructor(gameWidth, gameHeight, width, height, playerSprite) {
    this.width = width;
    this.height = height;
    this.icon = playerSprite;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2
    };
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

    console.log(this.facing);
  }

  moveForward() {
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

  draw(context) {
    context.fillStyle = "#000";
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.drawImage(this.icon, this.position.x, this.position.y);
  }

  update(dT) {
    if (!dT) return;
    this.position.x += 1 / dT;
  }
}
