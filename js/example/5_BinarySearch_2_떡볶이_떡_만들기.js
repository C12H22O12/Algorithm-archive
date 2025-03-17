const [N, M] = [4, 6]
const heights = [19, 14, 10, 17]

heights.sort((a, b) => a - b)

// 이진탐색 이용

const sum = (mid) => {
    return [...heights].filter((height) => height > mid).map((h) => h - mid).reduce((acc, cur) => acc + cur)
}

let start = heights[0];
let end = heights[N - 1];
let mid = 0;

while (start <= end) {
    mid = (start + end)/2 >> 0;

    if (sum(mid) < M) end = mid - 1
    else if (sum(mid) === M) break;
    else start = mid + 1
}

console.log(mid)



//
//
// 처음 짠 코드
// let answer = heights[0]
// let customer = 0

// while (true) {
//     customer = [...heights].filter((h) => h > answer).map((h) => h - answer).reduce((acc, cur) => acc + cur)
//     console.log(customer, answer)

//     if (customer === M) break;
//     answer += 1
// }

// console.log(answer)