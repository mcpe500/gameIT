let mapID = []
let map = []

Promise.all([grass_tile, flower_tile].map(img => {
    return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });
})).then(() => {
    fillMap(canvas.width / tile_size, canvas.height / tile_size);
    animate();
}).catch(error => {
    console.error("Image loading failed:", error);
});

let fillMap = (width, height) => {
    for (let i = 0; i < height; i++) {
        let t = []
        let tm = []
        for (let j = 0; j < width; j++) {
            let tileId = Math.floor(Math.random() * 10);
            if (tileId % 2 == 0) {
                tm.push({
                    x: j * tile_size,
                    y: i * tile_size,
                    width: tile_size,
                    height: tile_size,
                    image: grass_tile,
                    fps: grass_fps,
                    frame: 0
                })
            } else {
                tm.push({
                    x: j * tile_size,
                    y: i * tile_size,
                    width: tile_size,
                    height: tile_size,
                    image: flower_tile,
                    fps: flower_fps,
                    frame: 0
                })
            }
            t.push(tileId)
        }
        map.push(tm)
        mapID.push(t)
    }
}

let drawMap = (map) => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            // ctx.drawImage(map[i][j].image, map[i][j].x, map[i][j].y, map[i][j].width, map[i][j].height);
            let startX = animate(map[i][j].fps);
            console.log(startX)
            ctx.drawImage(
                map[i][j].image,       // Source image
                startX,        // Source x-coordinate (horizontal)
                0,        // Source y-coordinate (vertical)
                tile_size,    // Source width
                tile_size,   // Source height
                map[i][j].x,        // Destination x-coordinate (horizontal)
                map[i][j].y,        // Destination y-coordinate (vertical)
                map[i][j].width,    // Destination width (optional, can be omitted)
                map[i][j].height    // Destination height (optional, can be omitted)
            );
        }
    }
}

let animate = (expected_fps) => {
    return (frames % expected_fps) * tile_size;
}