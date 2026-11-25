'Object Creation'
let student={
	name:"Deeven",
	age:22,
	course:"Fullstack Development",
	marks:94,
	passed:true
};
console.log(student);

'Accessing Objects'
'method 1'
console.log(student.name);
'method2'
console.log(student["age"]);

'diff between bracket vs dot'
let key="age";
console.log(student[key]);
console.log(student.key);

'modyifying objects'
'changing values'
student.marks=96;
console.log(student["marks"]);
student.course="AI";
'adding additional properties and values'
student.city="Rajahmundry";
console.log(student);
'we can also do it using bracket'
'deleting properties and values'
delete student.passed;
console.log(student.passed);

'accessing nested Objects'
delete student.city;
student["address"]={
	city:"Rajahmundry",
	state:"Andhra Pradesh"
};
console.log(student.address.city);
console.log(student.address["state"]);

'Object Methods'
student.greet=function(){
	console.log("Hello");
};
student.greet();
'this'
let practice={
	name:"Deeven",
	greet(){
		console.log("Hello!"+this.name);
	}
};
practice.greet();

'looping through objects'
delete student.address
delete student.greet;
for (let key in student){
	console.log(key, student[key]);
	console.log(key);
}

'builtin object methods'
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));