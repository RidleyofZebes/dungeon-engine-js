export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
          player.moveForward();
          break;
        case 83:
          player.moveBackward();
          break;
        case 65:
          player.turn("left");
          break;
        case 68:
          player.turn("right");
          break;
      }
    });
  }
}
