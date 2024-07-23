def solution(word):
    position = [781, 156, 31, 6, 1]
    words = ['A', 'E', 'I', 'O', 'U']
    result = 0
    
    for i, char in enumerate(word):
        index = words.index(char)
        result += index * position[i]
        result += 1
    
    return result

# 테스트 케이스 1
print(solution("AAAAE"))
# 테스트 케이스 2
print(solution("AAAE"))
# 테스트 케이스 3
print(solution("I"))
# 테스트 케이스 4
print(solution("EIO"))