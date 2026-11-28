'Practical Project'
'Invertory Data Analyzer'
let products = [
    { id: 1, name: "Laptop", price: 50000, stock: 10, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, stock: 15, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 1500, stock: 30, category: "Accessories" },
    { id: 4, name: "Mouse", price: 800, stock: 50, category: "Accessories" },
    { id: 5, name: "Monitor", price: 12000, stock: 8, category: "Electronics" },
    { id: 6, name: "Headphones", price: 2500, stock: 20, category: "Accessories" },
    { id: 7, name: "Tablet", price: 18000, stock: 12, category: "Electronics" }
];

'PartA'
let sortedProductsAsc=products.toSorted((a,b)=>a.price-b.price);
console.log(sortedProductsAsc);
let sortedProductsDsc=products.toSorted((a,b)=>b.price-a.price);
console.log(sortedProductsDsc);

'PartB'
let sortedProductByName=products.toSorted((a,b)=>a.name.localeCompare(b.name));
console.log(sortedProductByName);

'PartC'
let searchByName=products.find(product=>product.name==="EarBuds");
console.log(searchByName?searchByName:"Product Not Found");

'PartD'
let sliced=products.slice(0,3);
console.log(sliced);

'PartE'
console.log(products.findIndex(product=>product.id===3));
products.splice(2,1);
console.log(products);

'PartF'
products.splice(2,0,{ id: 3, name: "Keyboard", price: 1500, stock: 30, category: "Accessories" });
console.log(products);

'PartG'
let updatedPrices=products.map(product=>({
	...product,
	price:product.price*1.15
}));
console.log(updatedPrices);

'PartH'
let sortedProductsByStock=products.toSorted((a,b)=>a.stock-b.stock);
console.log(sortedProductsByStock);

'PartI'
let top3Products=sortedProductsDsc.slice(0,3);
console.log(top3Products);

'PartH'
console.log(sortedProductsAsc);
console.log(sortedProductByName);
console.log(top3Products);
console.log(products.length);
let totalInventoryValue=updatedPrices.reduce((total,product)=>total+(product.price*product.stock),0);
console.log(totalInventoryValue);

'Challenge1'
let numbers = [45, 12, 99, 8, 65, 22, 100, 3];
let numbersAsc=numbers.toSorted((a,b)=>a-b);
console.log(numbersAsc);
let numbersDsc=numbers.toSorted((a,b)=>b-a);
console.log(numbersDsc);
console.log(numbersDsc.slice(0,3));
console.log(numbersAsc.slice(0,3));

'Challenge2'
let employees = [
    { name: "Arun", salary: 45000, department: "IT" },
    { name: "Anjali", salary: 30000, department: "HR" },
    { name: "Deeven", salary: 50000, department: "IT" },
    { name: "Amrutha", salary: 35000, department: "HR" },
    { name: "Avinash", salary: 52000, department: "IT" }
];
let sortEmployeesbySalary=employees.toSorted((a,b)=>b.salary-a.salary);
console.log(sortEmployeesbySalary);
let sortEmployeesByName=employees.toSorted((a,b)=>a.name.localeCompare(b.name));
console.log(sortEmployeesByName);
let sortByDepartmentandSalary=employees.toSorted(function(a,b){
	if (a.department!==b.department){
		return a.department.localeCompare(b.department);
	}
	return b.salary-a.salary;
});
console.log(sortByDepartmentandSalary);

'Challenge3'
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.splice(2,1);
fruits.splice(2,0,"Pineapple");
fruits.splice(0,1,"Watermelon");
console.log(fruits.slice(-2));
console.log(fruits);

'Challenge4'
let products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Tablet", price: 18000 }
];
let sortAsc=products2.toSorted((a,b)=>a.price-b.price);
console.log(sortAsc[sortAsc.length-1].name);
console.log(sortAsc[0].name);
console.log(sortAsc.slice(-2));
console.log(sortAsc.slice(0,2));

'Challenge5'
products[7]={id:8,name:"MousePad",price:200,stock:25,category:"Accessories"};
console.log(products);
let sortedProductsDsc2=products.toSorted((a,b)=>b.price-a.price);
console.log(sortedProductsDsc2);
let sortedProductsByStock2=products.toSorted((a,b)=>a.stock-b.stock);
console.log(sortedProductsByStock2);
console.log(products.slice(0,4));
products.splice(products.findIndex(product=>product.id===3),1);
console.log(products);
products.splice(2,0,{ id: 3, name: "Keyboard", price: 1500, stock: 30, category: "Accessories" });
console.log(products);
let updatedPrices2=products.map(product=>({
	...product,
	price:product.price*1.2
}));
console.log(updatedPrices2);
let top3_2=sortedProductsDsc2.slice(0,3);
console.log(top3_2);