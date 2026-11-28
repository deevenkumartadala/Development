'Practical Project'
'Invertory Data Analyzer'
let products = [
    { id: 1, name: "Laptop", price: 50000, stock: 10, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, stock: 15, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 1500, stock: 30, category: "Accessories" },
    { id: 4, name: "Mouse", price: 800, stock: 50, category: "Accessories" },
    { id: 5, name: "Monitor", price: 12000, stock: 8, category: "Electronics" },
    { id: 6, name: "Headphones", price: 2500, stock: 20, category: "Accessories" }
];

'PartA'
for (let product of products){
	console.log(
		product.name,"-",
		product.price,"-",
		product.stock
	);
}

'PartB'
let searchId=products.find(product=>product.id===2);
console.log(searchId?searchId.name:"Not Available");

'PartC'
let lowStock=products.filter(product=>product.stock<10);
console.log(lowStock);

'PartD'
let electronics=products.filter(product=>product.category==="Electronics");
console.log(electronics);

'PartE'
let productTotalValue=products.map(product=>({name:product.name,totalValue:product.price*product.stock}));
console.log(productTotalValue);

'PartF'
let totalInventoryValue=productTotalValue.reduce((total,product)=>total+product.totalValue,0);
console.log(totalInventoryValue);

'PartG'
let mostExpensiveProductPrice=products.reduce(function(productPrice,product){
	if (product.price>productPrice){
		productPrice=product.price;
	}
	return productPrice;
},0);
let mostExpensiveProduct=products.find(product=>product.price===mostExpensiveProductPrice);
console.log(mostExpensiveProduct);

'PartH'
let totalStock=products.reduce((total,product)=>total+product.stock,0);
let accessories=products.filter(product=>product.category==="Accessories");
console.log(products.length);
console.log(totalStock);
console.log(totalInventoryValue);
console.log(mostExpensiveProduct);
console.log(electronics.length);
console.log(accessories.length);

'Challenge1'
let students = [
    { name: "A", marks: 85 },
    { name: "B", marks: 45 },
    { name: "C", marks: 92 },
    { name: "D", marks: 32 },
    { name: "E", marks: 76 }
];
let above75=students.filter(student=>student.marks>75);
let student92=students.find(student=>student.marks===92);
let studentNames=students.map(student=>student.name);
let totalMarks=students.reduce((total,student)=>total+student.marks,0);
console.log(above75);
console.log(student92);
console.log(studentNames);
console.log(totalMarks/students.length);

'Challenge2'
let employees=[
	{id:1,name:"Deeven",department:"IT",salary:50000},
	{id:2,name:"Arun",department:"IT",salary:45000},
	{id:3,name:"Anjali",department:"Telecaller",salary:30000},
	{id:4,name:"Amrutha",department:"Telecaller",salary:32000},
	{id:5,name:"Avinash",department:"IT",salary:52000}
];
let iT=employees.filter(employee=>employee.department==="IT");
let highestPaidSalary=employees.reduce(function(high,employee){
	if(high<employee.salary){
		high=employee.salary;
	}
	return high;
},0);
let highestPaid=employees.find(employee=>employee.salary===highestPaidSalary);
let totalSalaryExpenditure=employees.reduce((total,employee)=>total+employee.salary,0);
let employeeNames=employees.map(employee=>employee.name);
let employeeGreat30K=employees.filter(employee=>employee.salary>30000);
console.log(iT);
console.log(highestPaid);
console.log(totalSalaryExpenditure);
console.log(employeeNames);
console.log(employeeGreat30K);

'Challenge3'
let updatedPrices=products.map(product=>({
	...product,
	price:product.price*1.10
}));
console.log(updatedPrices);

'Challenge4'
let productsStock0=products.filter(product=>product.stock===0);
let productsStock10to30=products.filter(product=>product.stock>=10&&product.stock<=30);
console.log(productsStock0);
console.log(productsStock10to30);
console.log(totalStock);
console.log(totalInventoryValue);

'Challenge5'
let categories=[...new Set(products.map(product=>product.category))];
console.log(categories);
let categoryCounts=products.reduce(function(counts,product){
	counts[product.category]=(counts[product.category]||0)+1;
	return counts;
},{});
console.log(categoryCounts);