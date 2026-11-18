class Material:
    company="ABC industries"
    
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
    
    def add_stock(self,amount):
        self.amount=amount
        if self.amount<=0:
            print("Quantity must be greater then zero.")
        else:
            self.quantity+=self.amount
            print("Stock Updated.")
        
    def remove_stock(self,amount):
        self.amount=amount
        if self.amount<=0:
            print("Quantity must be greater than zero.")
        elif self.amount>self.quantity:
            print("Not Enough Stock")
        else:
            self.quantity-=self.amount
            print("Stock Updated.")
    
    def display_details(self):
        print("Material:",self.name)
        print("Quantity Available:",self.quantity)
        print("Price per unit:",self.price)
        print("Total value:",self.price*self.quantity)

steel=Material("Steel",150,80)
copper=Material("Copper",75,450)
aluminium=Material("Aluminium",50,220)

steel.add_stock(50)
steel.display_details()
copper.remove_stock(25)
copper.display_details()
aluminium.remove_stock(100)
aluminium.display_details()
