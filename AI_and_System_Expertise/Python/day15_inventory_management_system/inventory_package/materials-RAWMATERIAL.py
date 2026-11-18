class Material:
    
    def __init__(self,name,quantity,price):
        self.name=name
        self.quantity=quantity
        self.price=price
        self.total_value=self.quantity*self.price
    
    def display_details(self):
        print("Material:",self.name)
        print("Quantity:",self.quantity)
        print("Price per Unit:",self.price)
        print("Total",self.name,"Value:",self.total_value)
        
    def add_stock(self,amount):
        if amount<=0:
            print("!Invalid Entry.")
        else:
            self.quantity+=amount
            self.total_value=self.quantity*self.price
            print("Stock Updated.")
    
    def remove_stock(self,amount):
        if amount<=0:
            print("!Invalid Entry.")
        elif amount>self.quantity:
            print("!Invalid Stock.")
        else:
            self.quantity-=amount
            self.total_value=self.quantity*self.price
            print("Stock Updated.")
            
         