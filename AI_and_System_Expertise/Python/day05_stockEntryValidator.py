def validate_stock():
    material_name=input("Enter Material:").strip()
    if material_name:
        try:
            material_quantity=int(input("Enter Quantity:"))
        except ValueError:
            print("Please Enter a valid whole number.")
        else:
            if material_quantity<=0:
                print("Quantity must be greater than zero.")
                return None
            else:
                print("Stock Entry Accepted.")
                print("Material:",material_name)
                print("Quantity:",material_quantity)
                return material_name,material_quantity
    else:
        print("Please enter Material Name.")
        return None
stock=validate_stock()
