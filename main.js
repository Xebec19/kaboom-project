import kaboom from "kaboom";

kaboom();

const block_size = 20;

const map = addLevel(
  [
    "====================",
    "=                  =",
    "=                  =",
    "=                  =",
    "=                  =",
    "=                  =",
    "=====================",
  ],
  {
    width: block_size,
    height: block_size,
    pos: vec2(0, 0),
    "=": () => [rect(block_size, block_size), color(255, 0, 0), area(), "wall"],
  }
);
