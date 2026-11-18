from inventory_package import calculations
from inventory_package.materials import Material

if __name__ == "__main__":
    material={
        "Steel":[100,80],
        "Copper":[50,450],
        "Aluminium":[25,220]
    }

    material_objs=[]
    for material,info in material.items():
        material_objs.append(Material(material,*info))

    for material in material_objs:
        material.display_details()

    print("Total Inventory Stock:",calculations.calculate_total_stock(material_objs))
    print("Total Inventory Value:",calculations.calculate_total_value(material_objs))

    material_objs[0].add_stock(20)
    material_objs[1].remove_stock(10)
    material_objs[2].remove_stock(100)

    for material in material_objs:
            material.display_details()

    print("Total Inventory Stock:",calculations.calculate_total_stock(material_objs))
    print("Total Inventory Value:",calculations.calculate_total_value(material_objs))