def calculate_value(quantity,price):
    return quantity*price

def calculate_total_stock(materials):
    total_stock=0
    for value in materials.values():
        total_stock+=value[0]
    return total_stock
