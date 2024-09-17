const [N, M, K] = [5, 8, 3]
const nums = [2, 4, 5, 4, 6]

nums.sort((a,b) => b - a)

const answer = Math.floor(M/K) * nums[1] + (M - Math.floor(M/K)) * nums[0]

console.log(answer)