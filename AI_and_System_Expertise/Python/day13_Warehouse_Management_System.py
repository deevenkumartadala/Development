class Material:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price

    def display_material(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price per unit:",self.price)

class Supplier:
    def __init__(self,name,material):
        self.name=name
        self.material=material

    def display_supplier(self):
        print("Supplier:",self.name)
        self.material.display_material()

class Manager:
    def __init__(self,name):
        self.name=name

    def display_manager(self):
        print("Manager:",self.name)

class Warehouse:
    def __init__(self,name,manager):
        self.name=name
        self.manager=Manager(manager)

    def display_warehouse(self):
        print("Warehouse:",self.name)
        self.manager.display_manager()

steel = Material("Steel", 100, 80)

supplier = Supplier("ABC Industries", steel)

warehouse = Warehouse("Central Warehouse", "David")

warehouse.display_warehouse()
supplier.display_supplier()
