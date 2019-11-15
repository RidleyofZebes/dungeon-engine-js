export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
        case 38:
          game.player.moveForward();
          game.camera.offsetCamera(game.player.facing, "forward");
          break;
        case 83:
        case 40:
          game.player.moveBackward();
          game.camera.offsetCamera(game.player.facing, "back");
          break;
        case 65:
        case 37:
          game.player.turn("left");
          break;
        case 68:
        case 39:
          game.player.turn("right");
          break;
      }
    });
  }
}
