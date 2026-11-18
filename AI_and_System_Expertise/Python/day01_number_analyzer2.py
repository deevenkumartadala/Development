numbers=[12, -5, 0, 18, -2, 7, 0, 10]

total = 0
count = 0
if numbers:
    low = numbers[0]
    high = numbers[0]
    positive = 0
    negative = 0
    zero = 0
    for number in numbers:
        total = total + number
        count = count + 1
        if number<low:
            low = number
        if number>high:
            high = number
        if number>0:
           positive = positive + 1
        if number<0:
            negative = negative + 1
        if number == 0:
            zero = zero + 1
    average = total / count
    print("Sum:",total)
    print("Average:",average)
    print("Minimum:",low)
    print("Maximum:",high)
    print("Number of Positive Values:",positive)
    print("Number of Negative Values:",negative)
    print("Number of Zeros:",zero)


else:
    print("The list is empty")
