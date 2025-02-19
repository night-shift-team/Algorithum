# 폰켓몬

[프로그래머스 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1845)

## 문제 설명
당신은 N개의 폰켓몬 중에서 최대한 다양한 종류의 폰켓몬을 선택하려고 합니다.  
폰켓몬의 종류는 각 번호로 구분되며, N마리의 폰켓몬 중에서 N/2마리를 선택해야 합니다.  
이때, 선택할 수 있는 폰켓몬 종류의 최대 개수를 구하세요.

### 제한 사항
- N은 항상 짝수입니다.
- 폰켓몬의 종류 번호는 1,000,000 이하의 자연수입니다.
- 폰켓몬의 개수는 1 이상 10,000 이하입니다.

## 입출력 예

| nums             | result |
|-------------------|--------|
| [3, 1, 2, 3]     | 2      |
| [3, 3, 3, 2, 2, 4] | 3      |
| [3, 3, 3, 2, 2, 2] | 2      |

## 예제 설명

### 예제 1
- N = 4마리의 폰켓몬 중에서 2마리를 선택해야 합니다.
- [3, 1, 2, 3]에서 선택할 수 있는 폰켓몬 종류는 [1, 2, 3]입니다.
- 이 중에서 2마리를 선택하면 [1, 2] 또는 [2, 3]과 같이 최대 2종류를 선택할 수 있습니다.

### 예제 2
- N = 6마리의 폰켓몬 중에서 3마리를 선택해야 합니다.
- [3, 3, 3, 2, 2, 4]에서 선택할 수 있는 폰켓몬 종류는 [2, 3, 4]입니다.
- 이 중에서 3마리를 선택하면 최대 3종류를 선택할 수 있습니다.

### 예제 3
- N = 6마리의 폰켓몬 중에서 3마리를 선택해야 합니다.
- [3, 3, 3, 2, 2, 2]에서 선택할 수 있는 폰켓몬 종류는 [2, 3]입니다.
- 이 중에서 3마리를 선택하더라도 최대 2종류를 선택할 수 있습니다.
