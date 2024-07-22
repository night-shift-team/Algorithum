# 버블 정렬
#  인접한 두 원소를 비교하여 정렬. 각 단계에서 인접한 두 원소를 비교하고 순서가 잘못됐으면 서로 스왑하여 리스트의 끝으로 가장 큰 원소가 이동

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 테스트 케이스 1
arr =[13, 5, 11, 7, 23, 15]

sorted_arr = bubble_sort(arr)

print(" ".join(map(str, sorted_arr)))
