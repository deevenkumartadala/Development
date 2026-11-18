from inventory_package.material import Material
from inventory_package import calculations

materials={
    "Steel":[100,80],
    "Copper":[50,450],
    "Aluminium":[25,220]
}

for material,info in materials.items():
    temp=[]
    temp.append(material)
    for value in info:
        temp.append(value)
    material_temp=Material(*temp)
    material_temp.display_details()
    print(material,"Value:",calculations.calculate_value(*info))

print("Total Stock:",calculations.calculate_total_stock(materials))