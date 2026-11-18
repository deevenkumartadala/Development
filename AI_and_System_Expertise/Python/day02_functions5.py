def count_positive(values):
    count=0
    for num in values:
        if num>0:
            count+=1
    return count

print(count_positive([-3, -2, -1]))
print(count_positive([0, 0, 0]))
print(count_positive([5, 10, 15]))
