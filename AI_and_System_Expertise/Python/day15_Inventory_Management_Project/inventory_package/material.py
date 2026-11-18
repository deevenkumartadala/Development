class Material:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price

    def display_details(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price:",self.price)
    