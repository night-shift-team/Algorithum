from collections import deque

def solution(priorities, location):
    queue = deque([(priority, index) for index, priority in enumerate(priorities)])
    answer = 0

    while queue:
        current = queue.popleft()
        
        if any(current[0] < item[0] for item in queue):
            queue.append(current)
        else:
            answer += 1 
            if current[1] == location:
                return answer

# 테스트 케이스
print(solution([2, 1, 3, 2], 2))
print(solution([1, 1, 9, 1, 1, 1], 0))