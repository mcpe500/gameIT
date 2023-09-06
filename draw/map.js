let mapID = []
let map = []

let fillMap = (width,height) => {
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
                    image: grass_tile
                })
            } else {
                tm.push({
                    x: j * tile_size,
                    y: i * tile_size,
                    width: tile_size,
                    height: tile_size,
                    image: flower_tile
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
            ctx.drawImage(map[i][j].image, map[i][j].x, map[i][j].y, map[i][j].width, map[i][j].height);
        }
    }
}

let animate = () => {
    
}