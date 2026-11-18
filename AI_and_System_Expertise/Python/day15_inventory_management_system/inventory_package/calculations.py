def calculate_value(quantity,price):
    return quantity*price

def calculate_total_stock(material_objs):
    total_stock=0
    for obj in material_objs:
        total_stock+=obj.quantity
    return total_stock

def calculate_total_value(material_objs):
    total_material_value=0
    for obj in material_objs:
        total_material_value+=obj.total_value
    return total_material_value