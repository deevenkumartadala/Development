def save_stock(stock):
    with open("inventory.txt", "w") as file:
        for item, quantity in stock.items():
            file.write(item + ": " + str(quantity)+"\n")

def read_stock():
    try:
        with open("inventory.txt","r",encoding="utf-8") as stock:
            print("Inventory Items:\n")
            for line in stock:
                print(line)
    except FileNotFoundError:
        print("File does not exist.")

def add_stock(name,quantity):
    try:
        with open("inventory.txt","a",encoding="utf-8") as stock:
            stock.write(name+":"+str(quantity)+"\n")
            print("Material Added\n")
    except FileNotFoundError:
        print("File does not exist.")
    finally:
        read_stock()

stock = {
    "Steel": 150,
    "Copper": 75,
    "Aluminium": 50
}
save_stock(stock)
read_stock()
material_name=input("Enter Material Name:")
if material_name.strip():
    try:
        material_quantity=int(input("Enter the quantity:"))
        if material_quantity<=0:
            print("Quantity must be greater than zero.")
        else:
            add_stock(material_name,material_quantity)
    except ValueError:
        print("Please Enter a whole number.")
else:
    print("Please Enter Material Name.")
