from inventory_package import calculations
from inventory_package.materials import Material

if __name__ == "__main__":
    
    def display_info(materials):
        for material in materials:
            material.display_details()
            
    materials={
        "Steel":[100,80],
        "Copper":[50,450],
        "Aluminium":[25,220]
    }
    materials_obj=[]
    for material,info in materials.items():
        materials_obj.append(Material(material,*info))
    
    quantities=[]
    values=[]
    for material_info in materials_obj:
        quantities.append(material_info.quantity)
        values.append(material_info.total_value)
        
    display_info(materials_obj)
    
    print(calculations.calculate_total_stock(quantities))
    print(
    
    materials_obj[0].add_stock(20)
    materials_obj[1].remove_stock(10)
    materials_obj[2].remove_stock(100)
    
    display_info(materials_obj)
