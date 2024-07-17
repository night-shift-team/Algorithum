def solution(sizes):
    # 명함의 가로와 세로 길이 중 큰 값과 작은 값을 구분해 새로운 리스트를 만듦
    adjusted_sizes = [(max(size), min(size)) for size in sizes]
    
    # 가로 길이 중 가장 큰 값과 세로 길이 중 가장 큰 값을 구함
    max_width = max(size[0] for size in adjusted_sizes)
    max_height = max(size[1] for size in adjusted_sizes)
    
    return max_width * max_height

# 테스트 케이스 1
print(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))  
# 테스트 케이스 2
print(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
# 테스트 케이스 3
print(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))