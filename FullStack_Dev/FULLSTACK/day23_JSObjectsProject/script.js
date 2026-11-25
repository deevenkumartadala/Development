


'Practical Project'
'Student Profile Analyzer'
let student={
	Name:"Deeven",
	Age:22,
	Course:"FullStack Development",
	Marks:[80,75,90],
	Address:{
		City:"Rajahmundry",
		State:"Andhra Pradesh",
		Pincode:533125
	},
	studentProfile(){
		let pass=0;
		let total=0;
		let Grade;
		for (let mark of this.Marks){
			total+=mark;
			if (mark>=35){
				pass++;
			}
		}
		let average=total/this.Marks.length;
		if (pass===this.Marks.length){
			pass=true;
			if (average>=90){
				Grade="A";
			}else if(average>=80){
				Grade="B";
			}else if(average>=70){
				Grade="C";
			}else{
				Grade="D";
			}
		}else{
			pass=false;
		}
		return [total,average,pass,Grade];
	}
};

for (let info in student){
	if (typeof student[info]==="function"){
		let result=student[info]();
		for (let i of result){
			console.log(i);
		}
	}else{
		console.log(info,student[info]);
	}
}


'Challenges'
'Challenge1'
let car={
	brand:"Mahindra",
	model:"Bolero Camper",
	year:2020,
	color:"Burgandy"
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);

'Challenge2'
let person={
	name:"Deeven",
	age:22,
	city:"Rajahmundry",
	state:"Andhra Pradesh",
};
person.country="India";
person.age=23;
delete person.city;
console.log(person);

'Challenge3'
let product = {
    name: "Mobile",
    price: 25000,
    brand: "Samsung"
};

let property = "price";
console.log(product[property]);

'Challenge4'
let nestedObj={
	name:"Deeven",
	phonenum:"6304437717",
	address:{
		city:"Rajahmundry",
		state:"Andhra Pradesh"
	}
}
console.log(nestedObj.address.city);
console.log(nestedObj.address.state);

'Challenge5'
let calculator={
	num1:21,
	num2:4,
	add(){
		return this.num1+this.num2;
	},
	subtract(){
		return this.num1-this.num2;
	},
	multiply(){
		return this.num1*this.num2;
	},
	divide(){
		return this.num1/this.num2;
	}
};
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

'Challenge6'
let employee = {
    name: "Ravi",
    department: "IT",
    salary: 35000,
    experience: 2
};
for (let info in employee){
	console.log(info);
	console.log(employee[info]);
	console.log(info,employee[info]);
}

'Challenge7'
let products=[
	mobile={
		name:"vivo v23",
		price:34999,
		stock:10
	},
	tablet={
		name:"samsung tab",
		price:24999,
		stock:4
	},
	laptop={
		name:"lenovo LOQ",
		price:64999,
		stock:2
	}
];
let totalPrice=0;
let mostExpensiveProductPrice=0;
let mostExpensiveProduct;
for (let product of products){
	console.log(product.name);
	totalPrice+=product.price*product.stock;
	if (product.price>mostExpensiveProductPrice){
		mostExpensiveProduct=product.name;
	}
	if (product.stock>0){
		console.log(product.name);
	}
}
console.log(totalPrice);

console.log(mostExpensive);