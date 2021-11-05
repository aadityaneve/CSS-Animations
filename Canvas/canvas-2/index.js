var player = {
    posX: 0,
    posY: 0,
};

var gameSettings = {
    cellHeight: 100,
    cellWidth: 100,
    offsetX: 100,
    offsetY: 100,
    gridX: 8,
    gridY: 8,
};

var events = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

window.addEventListener("load", () => {
    draw();

    document.addEventListener("keyup", handleKeyUp);
});

function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < gameSettings.gridX; i++) {
        for (let j = 0; j < gameSettings.gridY; j++) {
            var x = gameSettings.offsetX + i * gameSettings.cellWidth;
            var y = gameSettings.offsetY + j * gameSettings.cellHeight;
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                ctx.fillStyle = "black";
                ctx.fillRect(x, y, 100, 100);
            } else {
                ctx.fillStyle = "brown";
                ctx.fillRect(x, y, 100, 100);
            }
            if (player.posX === i && player.posY === j) {
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(
                    x + gameSettings.cellWidth / 2,
                    y + gameSettings.cellHeight / 2,
                    gameSettings.cellHeight / 3,
                    0,
                    360
                );
                ctx.fill();
            }
        }
    }
}

function handleKeyUp(e) {
    e.preventDefault();

    if (!events.includes(e.code)) {
        return;
    }

    switch (e.code) {
        case "ArrowLeft": {
            if (player.posX === 0) {
                player.posX = gameSettings.gridX;
            } else {
                player.posX = player.posX - 1;
            }
            break;
        }
        case "ArrowRight": {
            if (player.posX === gameSettings.gridX) {
                player.posX = 0;
            } else {
                player.posX = player.posX + 1;
            }
            break;
        }
        case "ArrowUp": {
            if (player.posY === 0) {
                player.posY = gameSettings.gridY;
            } else {
                player.posY = player.posY - 1;
            }
            break;
        }
        case "ArrowDown": {
            if (player.posY === gameSettings.gridY) {
                player.posY = 0;
            } else {
                player.posY = player.posY + 1;
            }
            break;
        }
        default: {
            return;
        }
    }
    draw();
}
