export default class InputHandler {
  constructor(player, map) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 87:
        case 38:
          player.moveForward();
          map.offsetCamera(player.facing);
          break;
        case 83:
        case 40:
          player.moveBackward();
          map.offsetCamera(player.facing);
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
