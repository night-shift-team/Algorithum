# 선택 정렬
# 매번 가장 작은 항목을 선택하여 정렬된 부분 리스트의 맨 뒤에 추가하는 방식

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # 현재 위치 i에서 최솟값 찾기
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # 찾은 최솟값, 현재 위치 i로 스왑
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

# 테스트 케이스 1
arr =[13, 5, 11, 7, 23, 15]

sorted_arr = selection_sort(arr)

print(" ".join(map(str, sorted_arr)))
