const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const targetFPS = 240; // Target frame rate
const frameInterval = 1000 / targetFPS; // Interval between frames in milliseconds
let lastFrameTime = performance.now();

let assets = './assets/';
let grass_image = assets + "itland_ptype_grasstile.png";
let grass_fps = 1;
let flower_image = assets + "itland_ptype_flowergrasstile.png";
let flower_fps = 2;

let white = "#FFFFFF";

// Objects
const player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 16,
    height: 16,
    speed: 16
};

let tile_size = 32;

// Images
let grass_tile = new Image();
grass_tile.src = grass_image;

let flower_tile = new Image();
flower_tile.src = flower_image;

// grass_tile.onload = function() {
//     ctx.drawImage(grass_image, x, y, grass_image.width, grass_image.height);
// };
