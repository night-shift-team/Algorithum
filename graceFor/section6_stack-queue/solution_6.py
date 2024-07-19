def find_prince(N, K):
    princes = list(range(1, N + 1))
    index = 0

    while len(princes) > 1:
        index = (index + K - 1) % len(princes)
        princes.pop(index)
    
    return princes[0]

# 테스트 케이스 1
N = 8
K = 3
print(find_prince(N, K)) 