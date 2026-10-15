const r = require("raylib");
function setup(windowWidth, windowHeight) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "circle points");
    r.SetTargetFPS(10);
    let x = 200;
    let y = 200;
    let radius = 150;
    let noOfPoints = 12;
    let degree = (2 * Math.PI) / 12;
    return {
        windowWidth,
        windowHeight,
        x,
        y,
        radius,
        noOfPoints,
        degree,
    };
}

function running() {
    return !r.WindowShouldClose();
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(world.x, world.y, world.radius, r.WHITE);
    for (let i = 0; i < world.noOfPoints; i++) {
        r.DrawCircle(
            world.radius * Math.cos(i * world.degree) + world.x,
            world.radius * Math.sin(i * world.degree) + world.y,
            5,
            r.RED,
        );
    }
    r.EndDrawing();
}
function update(world) {}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    running,
    draw,
    update,
    teardown,
};
