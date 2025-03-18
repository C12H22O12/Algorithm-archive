const [N, M] = [3, 7]
const coins = [2, 3, 5]
const dp = new Array(10001).fill(-1)

coins.forEach((coin) => dp[coin] = 1)

for (let j = coins[coins.length - 1] + 1; j <= M; j++) {
    const remain = coins.map((c) => {
        if (dp[j - c] < 0) return Infinity
        return dp[j - c] + dp[c]
    })
    dp[j] = Math.min.apply(null, remain)
}

console.log(dp[M])