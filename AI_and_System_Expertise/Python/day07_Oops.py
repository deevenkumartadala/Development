class Material:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
    
    def display(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price:",self.price)
        
steel=Material("Steel",150,80)
copper=Material("Copper",75,450)
aluminium=Material("Aluminium",50,220)

steel.display()
copper.display()
aluminium.display()