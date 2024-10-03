let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [number, ...standard] = input;
let [N, K] = number.split(" ").map((e) => Number(e));
standard = standard.map((s) => Number(s));
standard.sort((a, b) => b - a);

let res = 0;

for (let coin of standard) {
  if (K === 0) {
    break;
  }

  if (coin > K) {
    continue;
  }

  res += Math.floor(K / coin);
  K = K % coin;
}

console.log(res);
