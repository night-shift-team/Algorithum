# 단어 변환 (DFS/BFS)

[프로그래머스 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript)

## 문제 설명
두 개의 단어 `begin`과 `target`, 그리고 단어의 집합 `words`가 주어집니다. 아래와 같은 규칙을 이용하여 `begin`에서 `target`으로 변환하려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. 바꾼 후의 단어는 `words`에 있어야 합니다.

변환할 수 있는 가장 짧은 변환 과정을 찾고, 그 과정에서 거쳐야 하는 단계 수를 반환하세요. 만약 `target`으로 변환할 수 없다면 0을 반환합니다.

### 제약 조건
- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며, 모든 단어의 길이는 같습니다.
- `words`에는 3개 이상 50개 이하의 단어가 있으며, 중복되는 단어는 없습니다.
- `begin`과 `target`은 같지 않습니다.
- 변환 과정에서 사용하는 단어는 `begin`과 `words`에 있는 단어만 가능합니다.

## 입출력 예

| begin   | target  | words                          | result |
|---------|---------|--------------------------------|--------|
| "hit"   | "cog"   | ["hot", "dot", "dog", "lot", "log", "cog"] | 4      |
| "hit"   | "cog"   | ["hot", "dot", "dog", "lot", "log"]        | 0      |

## 예제 설명

### 예제 1
1. "hit" → "hot" → "dot" → "dog" → "cog" 의 순서로 4단계를 거쳐 변환할 수 있습니다.
2. 따라서 4를 반환합니다.

### 예제 2
1. "hit"에서 "cog"로 변환할 수 없습니다.
2. 따라서 0을 반환합니다.

## 문제 해결 아이디어

이 문제는 **그래프 탐색** 문제로 볼 수 있습니다. 단어를 노드로 보고, 한 번에 한 글자만 바꿀 수 있는 단어를 간선으로 연결된 노드로 간주합니다. 주어진 조건에 따라 `begin`에서 `target`으로 가는 최단 경로를 찾는 문제입니다.

### 해결 방법
1. **BFS 사용**:
   - BFS를 사용하면 최단 경로를 쉽게 찾을 수 있습니다.
   - `begin`에서부터 시작하여 한 글자만 차이나는 단어를 큐에 추가하고, 방문한 단어는 다시 방문하지 않도록 처리합니다.
   - `target`에 도달하면 변환 단계를 반환합니다.

2. **DFS 사용**:
   - DFS를 사용하면 모든 가능한 경로를 탐색해야 하므로, BFS보다 비효율적일 수 있습니다.
   - 하지만 재귀를 이용하여 구현할 수 있습니다.
