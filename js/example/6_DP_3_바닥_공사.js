const N = 5
const dp = new Array(1001).fill(0)

dp[1] = 1
dp[2] = 3

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 796796
}

console.log(dp[N])