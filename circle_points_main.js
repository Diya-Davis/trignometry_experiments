const sketch = require("./circle_points_sketch");

function loop(world) {
    while (sketch.running()) {
        sketch.draw(world);
        sketch.update(world);
    }
}

function main() {
    const world = sketch.setup(400, 400);
    loop(world);
    sketch.teardown();
}
main();
