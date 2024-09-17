function greedy(N, K, ans) {
   if (N === 1) {
      return ans
   }

   if (N % K) {
      return greedy(N -1 , K, ans + 1)
   }

   return greedy(Math.floor(N/K), K, ans + 1)
}

console.log(greedy(17, 4, 0))
console.log(greedy(25, 5, 0))