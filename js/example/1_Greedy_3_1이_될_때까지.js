// 1
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

// 2

const [N, K] = [27, 3]
let num2 = N
let cnt2 = 0

while (num2 >= K) {
    while (num2 % K !== 0) {
        num2 -= 1
        cnt2 += 1
    }

    num2 = (num2/K) >> 0
    cnt2 += 1
}

while (num2 > 1) {
    num2 -= 1;
    cnt2 += 1;
}

console.log(cnt2)

// 3
let num3 = N
let cnt3 = 0

while (num3 > 1) {  
    if (num3 % K === 0) num3 = (num3 / K) >> 0  
    else num3 -= 1  
    cnt3 += 1  // ✅ 카운트 추가
}

console.log(cnt3)
