class Material:
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price

    def add_stock(self,amount):
        if amount>0:
            self.quantity+=amount
        else:
            print("Quantity must be greater than zero.")

    def remove_stock(self,amount):
        if amount>0:
            if amount<self.quantity:
                self.quantity-=amount
            else:
                print("Insufficient stock.")
        else:
            print("Quantity must be greater than zero.")

    def update_price(self,value):
        if value>0:
            self.price=value
        else:
            print("Value must be greater than zero.")

    def display_details(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price per Unit:",self.price)
        print("Total Value:",self.price*self.quantity)

class PerishableMaterial(Material):
    def __init__(self,name,quantity,price,exp_date):
        super().__init__(name,quantity,price)
        self.exp_date=exp_date

    def display_details(self):
        super().display_details()
        print("Exp Date:",self.exp_date)

class ElectronicalMaterial(Material):
    def __init__(self,name,quantity,price,warranty):
        super().__init__(name,quantity,price)
        self.warranty=warranty

    def display_details(self):
        super().display_details()
        print("Warranty Years:",self.warranty)

steel=Material("Steel",150,50)

chips=PerishableMaterial("Chips",200,20,20112027)

tv=ElectronicalMaterial("Television",5,12000,2)

steel.add_stock(50)
steel.display_details()

chips.remove_stock(100)
chips.display_details()

tv.update_price(13000)
tv.display_details()
