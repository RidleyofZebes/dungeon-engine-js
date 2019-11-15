export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
        case 38:
          if (game.player.checkCollision(game, "forward") != "wall") {
            game.player.moveForward(game);
            game.camera.offsetCamera(game.player.facing, "forward");
          } else {
            console.log("BLOCKED");
            // TODO: Print blocking tile to message box.
          }
          break;
        case 83:
        case 40:
          if (game.player.checkCollision(game, "back") != "wall") {
            game.player.moveBackward(game);
            game.camera.offsetCamera(game.player.facing, "back");
          } else {
            console.log("BLOCKED");
            // TODO: Print blocking tile to message box.
          }
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
