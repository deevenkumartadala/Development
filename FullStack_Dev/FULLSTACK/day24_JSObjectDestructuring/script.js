'Practical Project'
'User Profile Management'
let user={
	name:"Deeven",
	age:22,
	email:"deeventadala@gmail.com",
	address:{
		city:"Rajahmundry",
		state:"Andhra Pradesh",
	},
	skills:["HTML","CSS","JavaScript"]
};

let {name:uname, email}=user;
console.log(uname);
console.log(email);
let user2={...user};
user2.age=24;
user2.role="Fullstack Developer";
let user3={
	...user,
	...user2
};
console.log(user2.job?.role);
console.log("skills" in user);
let user4=structuredClone(user);
user4.address.city="Hydrebad";
console.log(user);
console.log(user4);

'Challenges'
'Challenge1'
let employee = {
    name: "Ravi",
    salary: 35000,
    department: "IT",
    experience: 2
};
let {name:ename,salary, department:dept, experience=5}=employee;
console.log(ename);
console.log(salary);
console.log(dept);
console.log(experience);

'Challenge2'
let aname = "Ravi";
let age = 25;
let city = "Hyderabad";
let auser={
	aname,
	age,
	city
};
console.log(auser);

'Challenge3'
let a = {
    marks: 80
};

let b = a;

b.marks = 100;
console.log(a.marks);//output 100 cause both refer to same object and if we change one, other will also have that change.
console.log(b.marks);//output 100

'Challenge4'
let original = {
    name: "Ravi",
    address: {
        city: "Hyderabad"
    }
};

let copy = { ...original };

copy.name = "Arun";
copy.address.city = "Bengaluru";
'name change only changes in copy not in original but address city changed in both, cause spread syntax shallow copies object so nested object refers the same.'
console.log(original);

'Challenge5'
let aoriginal = {
    name: "Ravi",
    skills: ["HTML", "CSS"],
    details: {
        city: "Hyderabad"
    }
};
let acopy=structuredClone(aoriginal);
acopy.skills[1]="CSS3";
console.log(aoriginal);

'Challenge6'
let product = {
    name: "Laptop",
    price: 50000
};

let details = {
    brand: "Lenovo",
    price: 65000,
    stock: 5
};
let merge={
	...product,
	...details
};
'details price wins cause it merges later.'

'Challenge7'
employee = {
    name: "Ravi",
    department: {
        name: "IT"
    }
};
console.log(employee.department?.name);
console.log(employee.salary?.amount);
console.log(employee.profile?.email);

'Challenge8'
let student = {
    name: "Ravi",
    marks: 90,
    grade: undefined
};
console.log("name" in student);//true
console.log("grade" in student);//true
console.log("age" in student);//false