def calculate_value(quantity,price):
    return quantity*price

def calculate_total_stock(stock):
    total_stock=0
    for quantity in stock.values():
        total_stock+=quantity
    return total_stock

def check_stock(quantity):
    if quantity==0:
        return "Out of Stock"

    elif quantity>0:
        return "Stock Availble"

    else:
        return "Invalid Stock"