const dummy = (N, K, apples, L, direction) => {
  // 맵 세팅
  let map = Array.from(Array(N), () => new Array(N).fill(0));

  for (let apple of apples) {
    map[apple[0] - 1][apple[1] - 1] = 1;
  }
};

console.log(
  dummy(
    6,
    3,
    [
      [3, 4],
      [2, 5],
      [5, 3],
    ],
    3,
    ["3 D", "15 L", "17 D"]
  )
);
console.log(
  dummy(
    10,
    4,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ],
    4,
    ["8 D", "10 D", "11 D", "13 L"]
  )
);
console.log(
  dummy(
    10,
    5,
    [
      [1, 5],
      [1, 3],
      [1, 2],
      [1, 6],
      [1, 7],
    ],
    4,
    ["10 D", "11 D", "13 L"]
  )
);
