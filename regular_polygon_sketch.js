const r = require("raylib");
function setup(windowWidth, windowHeight) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "circle points");
    r.SetTargetFPS(10);
    let x = 200;
    let y = 200;
    let radius = 150;
    let noOfSides = 7;
    let degree = (2 * Math.PI) / noOfSides;
    return {
        windowWidth,
        windowHeight,
        x,
        y,
        radius,
        noOfSides,
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
    for (let i = 0; i < world.noOfSides; i++) {
        r.DrawLineEx(
            {
                x: world.radius * Math.cos(i * world.degree) + world.x,
                y: world.radius * Math.sin(i * world.degree) + world.y,
            },
            {
                x: world.radius * Math.cos((i + 1) * world.degree) + world.x,
                y: world.radius * Math.sin((i + 1) * world.degree) + world.y,
            },
            5,
            r.RED,
        );
        //r.DrawCircle(
        //    world.radius * Math.cos(i * world.degree) + world.x,
        //    world.radius * Math.sin(i * world.degree) + world.y,
        //    5,
        //    r.RED,
        //);
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
