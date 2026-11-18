from abc import ABC,abstractmethod

class InventoryItem(ABC):
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
    
    @abstractmethod
    def calculate_value(self):
        pass
        
    @abstractmethod
    def display_category(self):
        pass
    
    def display_details(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price:",self.price)
        
class RawMaterial(InventoryItem):
    def __init__(self,name,quantity,price):
        super().__init__(name,quantity,price)
    
    def display_category(self):
        print("Category:Raw Material")
    
    def calculate_value(self):
        print("Total Value:",self.quantity*self.price)
    
class ElectronicItem(InventoryItem):
    def __init__(self,name,quantity,price):
        super().__init__(name,quantity,price)
        
    def display_category(self):
        print("Category:Electronic Items")
        
    def calculate_value(self):
        print("Total Value:",self.quantity*self.price)
        
steel = RawMaterial("Steel", 100, 80)
laptop = ElectronicItem("Laptop", 5, 50000)

steel.display_details()
steel.display_category()
steel.calculate_value()

laptop.display_details()
laptop.display_category()
laptop.calculate_value()
