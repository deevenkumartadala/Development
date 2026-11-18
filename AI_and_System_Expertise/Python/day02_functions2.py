def add(value1,value2):
    return value1+value2
    
def number_checker(value):
    if value>0:
        return "Positive"
    elif value<0:
        return "negative"
    else:
        return "zero"

print("Addition result:",add(4,3))
print("The Value is:",number_checker(5))
