# 삽입 정렬
# 리스트를 부분적으로 정렬된 부분과 아직 정렬되지 않은 부분으로 나누고, 정렬되지 않은 각 요소를 적절한 위치에 삽입하여 정렬된 부분을 확장

def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        # 현재 요소를 정렬된 부분과 비교하여 적절한 위치에 삽입
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# 테스트 케이스 1
arr =[13, 5, 11, 7, 23, 15]

sorted_arr = insertion_sort(arr)

print(" ".join(map(str, sorted_arr)))
