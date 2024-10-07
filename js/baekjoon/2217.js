let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const [N, ...rope] = input.map((i) => Number(i));

console.log(
  Math.max.apply(
    null,
    rope.sort((a, b) => b - a).map((r, index) => r * (index + 1))
  )
);
