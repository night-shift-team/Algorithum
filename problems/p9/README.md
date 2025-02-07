# 완주하지 못한 선수

[프로그래머스 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

## 문제 설명
수많은 마라톤 선수가 참가한 대회에서, 한 선수는 완주하지 못했습니다.  
참가한 선수의 이름이 담긴 배열 `participant`와 완주한 선수의 이름이 담긴 배열 `completion`이 주어질 때,  
완주하지 못한 선수의 이름을 반환하는 함수를 작성하세요.

### 제한 사항
- `participant`의 길이는 1 이상 100,000 이하입니다.
- `completion`의 길이는 `participant`의 길이보다 1 작습니다.
- 참가자와 완주자의 이름은 모두 다릅니다.
- 이름은 알파벳 대문자와 소문자로만 이루어져 있습니다.

## 입출력 예

| participant                              | completion                | result   |
|------------------------------------------|---------------------------|----------|
| ["leo", "kiki", "eden"]                 | ["eden", "kiki"]          | "leo"    |
| ["marina", "josipa", "nikola", "vinko"] | ["marina", "nikola", "vinko"] | "josipa" |
| ["mislav", "stanko", "mislav", "ana"]   | ["stanko", "ana", "mislav"] | "mislav" |

## 예제 설명

### 예제 1
- "leo"는 완주하지 못한 선수이므로 반환됩니다.

### 예제 2
- "josipa"는 완주하지 못한 선수이므로 반환됩니다.

### 예제 3
- "mislav"는 완주하지 못한 선수이므로 반환됩니다.