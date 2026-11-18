class Material:

    def __init__(self, name, quantity, price):
        self.name = name
        self.__quantity = quantity
        self.__price = price
        
    def get_quantity(self):
        return self.__quantity
        
    def get_price(self):
        return self.__price

    def add_stock(self, amount):
        if amount > 0:
            self.__quantity += amount
            print("Stock added.")
        else:
            print("Invalid quantity.")

    def remove_stock(self, amount):
        if amount <= 0:
            print("Invalid quantity.")
        elif amount > self.__quantity:
            print("Insufficient stock.")
        else:
            self.__quantity -= amount
            print("Stock removed.")
    
    def set_price(self, value):
        if value > 0:
            self.__price = value
            print("Price Updated.")
        else:
            print("Invalid price")
            
    def display_details(self):
        print("Material:", self.name)
        print("Quantity:", self.__quantity)
        print("Price:", self.__price)
        print("Total Value:", self.__price * self.__quantity)


steel = Material("Steel", 150, 80)
copper = Material("Copper", 75, 450)
aluminium = Material("Aluminium", 50, 220)

steel.set_price(100)
steel.display_details()

steel.set_price(-50)
