# 문제 설명

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

## 제한 사항

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

## 입출력 예

|num|return|
|--|--|
|3|"Odd"|
|4|"Even"|

<br />
<br />
<br />

# 풀이

### 사용 언어

Javascript

### 코드

```
function solution(arr) {
    return arr.reduce((accumulator, current) => accumulator+current, 0)/arr.length;
}
```
