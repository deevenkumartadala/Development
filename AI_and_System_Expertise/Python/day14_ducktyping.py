class RawMaterial:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
        
    def calculate_value(self):
        return self.quantity*self.price

class ElectronicItem:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
    
    def calculate_value(self):
        return self.quantity*self.price
        
class PerishableItem:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
    
    def calculate_value(self):
        return self.quantity*self.price

def display_item_value(item):
    print(item.name,":",item.calculate_value())

def calculate_total_inventory(items):
    total_value=0
    for item in items:
        total_value+=item.calculate_value()
    return total_value
    
steel = RawMaterial("Steel", 100, 80)
copper = RawMaterial("Copper", 50, 450)

laptop = ElectronicItem("Laptop", 5, 50000)

chips = PerishableItem("Chips", 200, 20)

items = [steel, copper, laptop, chips]

for item in items:
    display_item_value(item)

print("Total Inventory Vlaue:",calculate_total_inventory(items))
