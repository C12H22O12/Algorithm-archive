function greedy(N, M, cards) {
   return Math.max.apply(null, cards.map((c) => Math.min.apply(null, c)))
}

console.log(greedy(3, 3, [[3,1,2], [4,1,4],[2,2,2]]))
console.log(greedy(2, 4, [[7, 3, 1, 8], [3, 3, 3, 4]]))