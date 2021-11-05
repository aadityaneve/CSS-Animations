window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillRect(100, 100, 200, 300);

    ctx.beginPath();
    ctx.arc(200, 250, 50, 0, 360);
    ctx.fillStyle = "yellow"
    ctx.fill();
});
