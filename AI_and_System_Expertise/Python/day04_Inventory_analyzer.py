def analyze_stock(stock):
    total_stock=0
    no_of_availablestock=0
    no_of_outofstock=0
    no_of_negativestock=0
    negativestock=[]
    outofstock=[]
    highest_stock_value=0
    highest_stock_material=None

    for item,quantity in stock.items():
        total_stock+=quantity
        if quantity>=0:
            if quantity>0:
                no_of_availablestock+=1
            else:
                no_of_outofstock+=1
                outofstock.append(item)
        else:
            no_of_negativestock+=1
            negativestock.append(item)
        if quantity>highest_stock_value:
            highest_stock_value=quantity
            highest_stock_material=item
    return total_stock,no_of_availablestock,no_of_outofstock,outofstock,no_of_negativestock,negativestock,highest_stock_material

stock={"Steel":150,
    "Copper":0,
    "Aluminium":50,
    "Brass":0,
    "Iron":25
}
if stock:
    result=analyze_stock(stock)
    print("Total Stock Quantity:",result[0])
    print("Materials with Stock greater than zero:",result[1])
    print("Materials out of stock:",result[2])
    print("Zero-stock Materials:",result[3])
    print("No.of Materials with Negative stock:",result[4])
    if result[5]:
        print("Material With Negative Stock:",result[5])
    print("Highest-stock Material:",result[6])
else:
    print("No Material")
