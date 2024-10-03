let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const [N, ...arr] = input;
const times = arr
  .map((time) => time.split(" ").map((t) => +t))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let res = 0;
let p = 0;

times.forEach((time) => {
  if (time[0] >= p) {
    res += 1;
    p = time[1];
  }
});

console.log(res);
