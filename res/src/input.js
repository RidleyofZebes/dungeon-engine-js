export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
        case 38:
          player.moveForward();
          break;
        case 83:
        case 40:
          player.moveBackward();
          break;
        case 65:
        case 37:
          player.turn("left");
          break;
        case 68:
        case 39:
          player.turn("right");
          break;
      }
    });
  }
}
