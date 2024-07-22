# 문제 설명

가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.

예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

![img](https://i.imgur.com/lt2zdK6.png)

![img](https://i.imgur.com/5c5EUrq.png)

체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

## 제한 사항

- 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
- n은 12이하의 자연수 입니다.


## 입출력 예

|n|result|
|--|--|
|4|2|

### 설명
입출력 예 #1
문제의 예시와 같습니다.

<br />
<br />
<br />

# 풀이

### 사용 언어

Javascript

### 제출 코드
```
function solution(n) {
    let answer = 0;
    
    const isVaild = (board, row) => {
        for (let i = 1; i < row; i++) {
            if (board[i] === board[row]) return false;
            if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
        }
        
        return true;
    };
    
    const dfs = (board, row) => {
        if (row === n) {
            answer += 1;
        } else {
            for (let i = 1; i <= n; i++) {
                board[row + 1] = i;

                if (isVaild(board, row + 1)) dfs(board, row + 1);
            }
        }
    };
    
    for (let i = 1; i <= n; i++) {
        const board = new Array(n + 1).fill(0);
        
        board[1] = i;
        dfs(board, 1);
    }
    
    return answer;
}
```

## 참고
[[프로그래머스] LV.3 N-Queen (JS)](https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS-2xs6gra3)