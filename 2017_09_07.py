def binary_search(data, target):
    start = 0
    end = len(data[:-1])
    while start <= end:
        mid = (start + end) // 2
        if target == data[mid]:
            return mid
        elif target < data[mid]:
            end = mid - 1
        else:
            start = mid + 1
    return None

li = [1,2,5,6,7,8,9]
idx = binary_search(li, 5)

if idx:
    print(idx)
else:
    print('no such data')