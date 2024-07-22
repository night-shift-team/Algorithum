def special_sort(arr):
    negatives = []
    positives = []

    for num in arr:
        if num < 0:
            negatives.append(num)
        else:
            positives.append(num)

    return negatives + positives

# 테스트 케이스 1
arr =[1, 2, 3, -3, -2, 5, 6, -6]

sorted_arr = special_sort(arr)

print(" ".join(map(str, sorted_arr)))
