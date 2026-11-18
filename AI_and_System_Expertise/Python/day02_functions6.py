def analyze_numbers(numbers):
    count_positive=0
    count_negative=0
    count_zero=0
    if numbers:
        for num in numbers:
            if num>0:
                count_positive+=1
            elif num<0:
                count_negative+=1
            else:
                count_zero+=1
    return count_positive,count_negative,count_zero
    
values =[12, -5, 0, 18, -2, 7, 0, 10]
result = analyze_numbers(values)
print(result)
