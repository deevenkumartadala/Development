class Battery:
    def __init__(self,capacity,percentage):
        self.capacity=capacity
        self.percentage=percentage
    
    def display_battery(self):
        print("Battery specs:")
        print("Capacity:",self.capacity, "mAh")
        print("percentage:",self.percentage, "%")

class SmartPhone:
    def __init__(self,brand,model,capacity,percentage):
        self.brand=brand
        self.model=model
        self.battery=Battery(capacity,percentage)
    
    def display_smartphone(self):
        print("Mobile Phone:")
        print("Brand:",self.brand)
        print("Model:",self.model)
        self.battery.display_battery()

myphone=SmartPhone("Vivo","V23 5G","4200","51")

myphone.display_smartphone()
