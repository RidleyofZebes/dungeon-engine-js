export default function loadImages(directory) {
  let imagesToLoad = [
    "border",
    "player_e",
    "player_n",
    "player_s",
    "player_w",
    "stone_floor",
    "stone_wall"
  ];
  let imagesLoaded = [];

  for (let i = 0; i < imagesToLoad.length; i++) {
    let nextimage = directory + imagesToLoad[i] + ".png";

    let loadedImage = new Image();
    loadedImage.src = nextimage;

    imagesLoaded[imagesToLoad[i]] = loadedImage;
  }

  return imagesLoaded;
}
