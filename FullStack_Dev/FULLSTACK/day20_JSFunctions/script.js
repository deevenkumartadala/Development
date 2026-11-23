'Part A'
'Experiment 1'
function greetUser(name){
	console.log("Welcome,",name);
}
let a=greetUser("Deeven");
a=greetUser("Raju");
a=greetUser("Karthik");

'Eperiment 2'
function addNumber(a,b){
	return a+b;
}
let sum=addNumber(2,3);
console.log(sum);
sum=addNumber(20,2);
console.log(sum);
sum=addNumber(20,7);
console.log(sum);

'Experiment 3'
function square(s){
	return s*s;
}
let result=square(2);
console.log(result);
result=square(5);
console.log(result);
result=square(10);
console.log(result);

'Experiment 4'
function checkEvenOdd(num){
	if (num%2===0){
		return "Even";
	}else{
		return "odd";
	}
}
result=checkEvenOdd(4);
console.log(result);
result=checkEvenOdd(6);
console.log(result);
result=checkEvenOdd(28);
console.log(result);
result=checkEvenOdd(21);
console.log(result);
result=checkEvenOdd(5);
console.log(result);

'Part B'
'Experiment 5'
function Calculate(a,b,oper){
	if(oper==="+"){
		return a+b;
	}else if(oper==="-"){
		return a-b;
	}else if(oper==="*"){
		return a*b;
	}else if(oper==="/"){
		return a/b;
	}else{
		return "Invalid Operator";
	}
}
result=Calculate(10,5,"+");
console.log(result);
result=Calculate(10,5,"-");
console.log(result);
result=Calculate(10,5,"*");
console.log(result);
result=Calculate(10,5,"/");
console.log(result);

'Experiment 6'
function calculateGrade(marks){
	if (marks>=90 && marks<=100){
		return "A";
	}else if (marks>=80 && marks<100){
		return "B";
	}else if (marks>=70 && marks<100){
		return "C";
	}else if (marks>=60 && marks<100){
		return "D";
	}else if (marks<60 && marks>=0){
		return "F";
	}else{
		return "Invalid Marks";
	}
}
result=calculateGrade(100);
console.log(result);
result=calculateGrade(90);
console.log(result);
result=calculateGrade(89);
console.log(result);
result=calculateGrade(80);
console.log(result);
result=calculateGrade(60);
console.log(result);
result=calculateGrade(59);
console.log(result);
result=calculateGrade(0);
console.log(result);
result=calculateGrade(-1);
console.log(result);
result=calculateGrade(101);
console.log(result);

'Experiment 7'
function printTable(num){
	for (let i=1;i<=10;i++){
		console.log(num,"x",i,"=",num*i);
	}
}
let t=printTable(5);

'Experiment 8'
function calculateSum(num){
	let sum=0;
	for (let i=1;i<=num;i++){
		sum+=i;
	}
	return sum
}
result=calculateSum(5);
console.log(result);
result=calculateSum(10);
console.log(result);
result=calculateSum(100);
console.log(result);

'Challenges'
'Challenge1'
function findlargest(a,b){
	if (a>b){
		return a;
	}else if (a===b){
		return "Both are Equal";
	}
	else{
		return b;
	}
}
result=findlargest(6,6);
console.log(result);
result=findlargest(3,4);
console.log(result);

'Challenge 2'
function findlargestofThree(a,b,c){
	if (a>=b && a>=c){
		if (a===b){
			return "a,and,b,are equal and greater than,c";
		}else if(a===c){
			return "a,and,c,are equal and greater than,b";
		}
		return a;
	}else if (b>=a && b>=c){
		if (a===b){
			return "a,and,b,are equal and greater than,c";
		}else if(b===c){
			return "b,and,c,are equal and greater than,a";
		}
		return b;
	}else if (c>=b && c>=a){
		if (c===b){
			return "c,and,b,are equal and greater than,a";
		}else if(a===c){
			return "a,and,c,are equal and greater than,b";
		}
		return c;
	}else{
		return "All are Equal";
	}
}
result=findlargestofThree(1,2,2);
console.log(result);
result=findlargestofThree(2,5,6);
console.log(result);
result=findlargestofThree(5,5,2);
console.log(result);

'Challenge 3'
function factorial(n){
	let fact=1;
	for (let i=n;i>1;i--){
		fact=fact*i;
	}
	return fact;
}
result=factorial(5);
console.log(result);
result=factorial(4);
console.log(result);
result=factorial(3);
console.log(result);
result=factorial(1);
console.log(result);

'Challenge 4'
function isPrime(n){
	let count=0;
	for (let i=2;i<n;i++){
		if (n%i===0){
			count++;
		}
	}
	if (count<1){
		return "Prime";
	}else{
		return "Not Prime";
	}
}
result=isPrime(5);
console.log(result);
result=isPrime(9);
console.log(result);


'Challenge 5'
function reverseNumber(num){
	let ans=0;
	while(num>0){
		const digit=num%10;
		ans=ans*10+digit;
		num=(num-(num%10))/10;
	}
	return ans;
}
result=reverseNumber(1234);
console.log(result);

'Challenge 6'
function countDigits(num){
	let ans=0;
	while(num>0){
		num=(num-(num%10))/10;
		ans++;
	}
	return ans;
}
result=countDigits(1234);
console.log(result);

'Challenge 7'
function printFibonacci(num){
	let initial=0;
	let next=1;
	console.log(initial);
	console.log(next);
	let inc=0;
	for(let i=2;i<num;i++){
		inc=initial+next;
		console.log(inc);
		initial=next;
		next=inc;	
	}
}
result=printFibonacci(7);

'Challenge 8'
function calculateTotal(marks1,marks2,marks3){
	return marks1+marks2+marks3;
}
function calculateAverage(total,numberOfSubjects){
	return total/numberOfSubjects;
}
function calculateGrade(average){
	if (average>=90 && average<=100){
		return "A";
	}else if (average>=80 && average<100){
		return "B";
	}else if (average>=70 && average<100){
		return "C";
	}else if (average>=60 && average<100){
		return "D";
	}else if (average<60 && average>=0){
		return "F";
	}else{
		return "Invalid Marks";
	}
}
let total=calculateTotal(95,80,70);
let average=calculateAverage(total,3);
let grade=calculateGrade(average);
console.log(total);
console.log(average);
console.log(grade);