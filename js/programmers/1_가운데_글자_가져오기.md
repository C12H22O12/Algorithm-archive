# 문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

## 제한 사항

- s는 길이가 1 이상, 100이하인 스트링입니다.

## 입출력 예

|s|return|
|--|--|
|"abcde"|"c"|
|"qwer"|"we"|

<br />
<br />
<br />

# 풀이

### 사용 언어

Javascript

### 코드

```
function solution(s) {
    var answer = '';
    var p = Math.floor(s.length / 2);

    return answer = (s.length %2 == 0) ? s.substr(p-1,2):s.substr(p,1);
}
```
