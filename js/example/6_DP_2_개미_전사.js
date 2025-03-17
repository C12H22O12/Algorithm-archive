const N = 4
const storage = [1, 3, 1, 5]
const dp = new Array(100).fill(0)

// dp 제대로 이용한 코드
// 단순히 퐁/당/퐁/당 방식으로 1칸씩 뛰어넘는 건 최대값을 보장할 수 없다
// 그럼 이전 값과, 두 칸 전
dp[0] = storage[0]
dp[1] = Math.max(storage[0], storage[1])

// 이전 칸과 한 칸 전+현재 칸의 값 중 최대값을 취한다
for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + array[i])
}

// 처음 코드
// 방문 횟수가 제한되지 않았다고 생각
// -> 그럼 최대한 많은 곳을 가면 되지 않나? 라는 이유로 한 칸씩 바로 넘어가면서 바로 이동하는 경우를 생각
// 역시 그리디적 사고 방식이 아니었나...싶음
for (let s in storage) {
    dp[s] = storage[s]
}

for (let i = 2; i < N; i++) {
    dp[i] = dp[i] + dp[i - 2]
}

console.log(Math.max.apply(null, dp))