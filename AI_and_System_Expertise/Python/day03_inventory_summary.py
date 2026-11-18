stock={
    "Steel":150,
    "Copper":75,
    "Aluminium":50,
    "Brass":0
}

total=0
abovezero=0
zero=[]
for material,quantity in stock.items():
    print(material,":",quantity)
    total+=quantity
    if quantity>0:
        abovezero+=1
    if quantity==0:
        zero.append(material)
print("Total Stock:",total)
print("No. of Material Greater than zero:",abovezero)
print("Material whose value is zero:",zero)
