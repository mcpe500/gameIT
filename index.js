function main() {
    requestAnimationFrame(main);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap(map);
    ctx.fillStyle = white;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Variables to track which keys are currently pressed
const keysPressed = {};

// Fungsi untuk menggerakkan pemain
function movePlayer(event) {
    keysPressed[event.code] = true;

    if (keysPressed['KeyW']) {
        player.y -= player.speed;
    }
    if (keysPressed['KeyA']) {
        player.x -= player.speed;
    }
    if (keysPressed['KeyS']) {
        player.y += player.speed;
    }
    if (keysPressed['KeyD']) {
        player.x += player.speed;
    }
    console.log(map)
}

// Mengatur event listener untuk menggerakkan pemain
document.addEventListener("keydown", movePlayer);

// Menambahkan event listener untuk menghentikan gerakan ketika tombol dilepas
document.addEventListener("keyup", function(event) {
    delete keysPressed[event.code];
});

// Memulai permainan
fillMap(100,100);
main();
