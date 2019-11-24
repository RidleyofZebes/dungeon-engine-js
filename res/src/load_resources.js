export function loadImages(directory) {
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
    let nextImage = directory + imagesToLoad[i] + ".png";

    let loadedImage = new Image();
    loadedImage.src = nextImage;

    imagesLoaded[imagesToLoad[i]] = loadedImage;
  }

  return imagesLoaded;
}

export function loadFonts(directory) {
  let fontsToLoad = ["Alkhemikal", "Poco"];
  let fontsLoaded = [];

  for (let i = 0; i < fontsToLoad.length; i++) {
    let nextfont = directory + fontsToLoad[i] + ".ttf";

    let loadedFont = new FontFace(fontsToLoad[i], "url(" + nextfont + ")");
    fontsLoaded[fontsToLoad[i]] = loadedFont;
  }
  return fontsLoaded;
}

export async function loadJson(directory) {
  // export function loadJson(directory) {
  let jsonToLoad = ["containers", "items", "monsters", "tiles"];
  let jsonsLoaded = [];

  for (let i = 0; i < jsonToLoad.length; i++) {
    let nextJson = directory + jsonToLoad[i] + ".json";

    let data = await fetch(nextJson);
    let json = await data.json();
    jsonsLoaded[jsonToLoad[i]] = json;
  }

  //   let loadedJson = new XMLHttpRequest();
  //   loadedJson.open("GET", nextJson);
  //   // loadedJson.responseType = "text";

  //   loadedJson.onload = function() {
  //     if (loadedJson.readyState === loadedJson.DONE) {
  //       // if (this.status >= 200 && this.status < 400) {
  //       if (loadedJson.status === 200) {
  //         jsonsLoaded[jsonToLoad[i]] = JSON.parse(loadedJson.responseText);
  //       }
  //     }
  //   };
  //   loadedJson.send();
  // }

  // console.log(jsonsLoaded.items.sword);
  return jsonsLoaded;
}
