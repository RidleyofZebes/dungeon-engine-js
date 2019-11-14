export default class Screen {
  constructor() {
    this.gameWindow = {
      x: 1280,
      y: 720
    };
    this.mainView = {
      x: 5,
      y: 5,
      width: 1000,
      height: 500
    };
    this.miniMap = {
      x: 1010,
      y: 5,
      width: 265,
      height: 265
    };
    this.textBox = {
      x: 5,
      y: 510,
      width: 1000,
      height: 205
    };
    this.menuBox = {
      x: 1010,
      y: 275,
      width: 265,
      height: 440
    };
  }

  drawBackdrop(context) {
    context.fillStyle = "#333";
    context.fillRect(0, 0, this.gameWindow.x, this.gameWindow.y);
  }

  clearMap(context) {
    context.clearRect(
      this.mainView.x,
      this.mainView.y,
      this.mainView.width,
      this.mainView.height
    );
    context.save();
    context.clip();
    context.restore();
  }

  clearMiniMap(context) {
    context.fillStyle = "#000";
    context.fillRect(
      // context.clearRect(
      this.miniMap.x,
      this.miniMap.y,
      this.miniMap.width,
      this.miniMap.height
    );
  }

  clearTextBox(context) {
    context.fillStyle = "#000";
    context.fillRect(
      this.textBox.x,
      this.textBox.y,
      this.textBox.width,
      this.textBox.height
    );
  }

  clearMenuBox(context) {
    context.fillStyle = "#000";
    context.fillRect(
      this.menuBox.x,
      this.menuBox.y,
      this.menuBox.width,
      this.menuBox.height
    );
  }
}
