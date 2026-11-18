def calculate_price(price,discount=10):
    discount=price*discount/100
    return price-discount
print(calculate_price(100))
print(calculate_price(200,25))
