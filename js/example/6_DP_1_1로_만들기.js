// DP 적용
/**
 * 점화식: dp[i]=min(dp[i−1]+1,dp[i/2]+1,dp[i/3]+1,dp[i/5]+1)
즉, i가 되기 위한 모든 가능 경로 중 최소값을 선택함.
 */

const calDp = (target) => {
  const dp = new Array(30001).fill(0)

  for (let i = 2; i <= target; i++) {
      dp[i] = dp[i - 1] + 1;

      if (i % 2 === 0) dp[i] = Math.min(dp[i/2 >> 0] + 1, dp[i])
      else if (i % 3 === 0) dp[i] = Math.min(dp[i/3 >> 0] + 1, dp[i])
      else if (i % 5 === 0) dp[i] = Math.min(dp[i/5 >> 0] + 1, dp[i])
  }

  return dp[target]
}

//
//
// 처음 짠 코드
/**
 *  동작 방식 : 탐욕적 (Greedy) 접근
- num에서 target까지 도달하기 위해, 가능한 한 큰 연산(×5, ×3, ×2)을 먼저 수행함.
- 만약 num * 5가 target을 넘지 않으면 ×5를 먼저 하고, 아니면 ×3 → ×2 → +1 순으로 진행.
- 재귀 호출을 통해 목표 숫자에 도달할 때까지 연산을 수행.
❌ 문제점
항상 최적해를 보장하지 않음 (Greedy의 한계):
예를 들어 cal(1, 26, 0)을 실행하면 다음과 같이 동작함.

> 1 → 5 → 25 → 26  (총 연산 3번)  
이 방식이 항상 최소 연산 횟수를 보장하는 것은 아님. 예를 들어, 26을 만드는 더 짧은 방법도 있을 수 있음.

> 1 → 2 → 4 → 8 → 16 → 32 → 31 → 30 → 10 → 5 → 25 → 26 (잘못된 경우)  

특정 숫자에서 최적의 연산을 보장하지 못할 수도 있음.
 */
const cal = (num, target, cnt) => {
  if (num === target) return cnt

  cnt += 1

  if (num * 5 <= target) return cal(num*5, target, cnt)
  else if (num * 3 <= target) return cal(num*3, target, cnt)
  else if (num * 2 <= target) return cal(num*2, target, cnt)
  else return cal(num+1, target, cnt)
}

console.log(cal(1, 26, 0))
console.log(calDp(26))