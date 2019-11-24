export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
        case 38:
          game.player.moveForward(game);
          break;
        case 83:
        case 40:
          game.player.moveBackward(game);
          break;
        case 65:
        case 37:
          game.player.turn("left");
          break;
        case 68:
        case 39:
          game.player.turn("right");
          break;
        case 69:
          game.player.writeJournal("You examine the tile in front of you...");
          // EXAMINE
          break;
        case 81:
          game.player.writeJournal("You pressed 'Q'.");
          // Q
          break;
        case 107:
          game.camera.zoomIn(game);
          break;
        case 109:
          game.camera.zoomOut(game);
          break;
        case 13:
          game.camera.resetZoom(game);
          break;
      }
    });
  }
}
