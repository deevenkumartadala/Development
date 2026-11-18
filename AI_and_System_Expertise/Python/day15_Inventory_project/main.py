import inventory

stock = {
    "Steel": 100,
    "Copper": 50,
    "Aluminium": 0
}

steel_value=inventory.calculate_value(stock["Steel"],80)

total_quantity=inventory.calculate_total_stock(stock)

aluminium_stock=inventory.check_stock(stock["Aluminium"])

print("Steel Value",steel_value)
print("Total Inventory Stock:",total_quantity)
print("Aluminium Stock:",aluminium_stock)