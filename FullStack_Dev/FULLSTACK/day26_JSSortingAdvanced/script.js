'Experiment1'
let names = ["Zara", "Arun", "Deeven", "Anjali"];
names.sort();
console.log(names);
'sorting is work based on unicode of values'

'Experiment2'
let numbers = [100, 5, 25, 9, 80];
numbers.sort();
console.log(numbers);
'numbers also sorted lexicographically'

numbers.sort((a,b)=>a-b);//ascending order
console.log(numbers);
numbers.sort((a,b)=>b-a);//descending order
console.log(numbers);


numbers = [45, 12, 100, 8, 65, 30];
numbers.sort((a,b)=>a-b);//ascending order
console.log(numbers);

numbers.sort((a,b)=>b-a);//descending order
console.log(numbers);


'Experiment3'
let products1 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
products1.sort((a,b)=>a.price-b.price);
console.log(products1);//ascending 

let products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
products2.sort((a,b)=>b.price-a.price);
console.log(products2);//descending

let products3 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
products3.sort((a,b)=>a.name.localeCompare(b.name));
console.log(products3);//alphabetically by name

let products4 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
products4.sort((a,b)=>b.name.localeCompare(a.name));
console.log(products4);//reverse alphabetically by name

'Experiment4'
let employees = [
    { name: "Arun", department: "IT", salary: 45000 },
    { name: "Anjali", department: "HR", salary: 30000 },
    { name: "Deeven", department: "IT", salary: 50000 },
    { name: "Amrutha", department: "HR", salary: 35000 },
    { name: "Avinash", department: "IT", salary: 50000 }
];
employees.sort(function(a,b){
	if (a.salary!==b.salary){
		return b.salary-a.salary
	}
	return a.name.localeCompare(b.name);
});
console.log(employees);

'Experiment5'
numbers = [10, 20, 30, 40, 50, 60];
let result = numbers.slice(0, 3);
console.log(result);

result=numbers.slice(1,5);
console.log(result);

result=numbers.slice(-2);
console.log(result);

result=numbers.slice();
console.log(result);

'Experiment6'
numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 2);
console.log(numbers);

numbers = [10, 20, 40, 50];
numbers.splice(2, 0, 30);
console.log(numbers);

numbers = [10, 20, 30, 40];
numbers.splice(1, 1, 25);
console.log(numbers);

numbers = [10, 20, 30, 40, 50];
numbers.splice(2,1);
console.log(numbers);

numbers.splice(2,0,30);
numbers.splice(2,0,25);
console.log(numbers);

numbers.splice(4,1,45);
console.log(numbers);

numbers.splice(numbers.length-2,2);
console.log(numbers);

'Experiment7'
let original = [10, 20, 30, 40];
let sliced = original.slice(1, 3);
console.log(sliced);
console.log(original);

original = [10, 20, 30, 40];
let removed = original.splice(1, 2);
console.log(removed);
console.log(original);

'Experiment8'
numbers = [50, 10, 40, 20, 30];
let sortedNumbers = numbers.toSorted((a,b)=>a-b);
console.log(sortedNumbers);
console.log(numbers);

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 }
];
let sortedProducts = products.toSorted((a, b)=>a.price - b.price);
console.log(sortedProducts);
console.log(products);

'tosorted only works for modern browsers for old ones we have a logical sorting method for copy.'
sortedProducts=[...products].sort((a,b)=>b-a);
console.log(sortedProducts);