'Practical Exercise'
'Part A'
'Experiment1'
let cities=["Rajahmundry","Kakinada","Vizag","Vijayawada","Guntur"];
console.log(cities);
console.log(cities[0]);
console.log(cities[2]);
console.log(cities[cities.length-1]);

'Experiment2'
let number=[10,20,30,40,50];
number[1]=25;
number[number.length-1]=100;
console.log(number);

'Experiment3'
let exp3=[20,7,2005,23,11,2026,7];
console.log(exp3.length);
console.log(exp3[exp3.length-1]);
exp3.push(24,11);
console.log(exp3.length);

'Part B'
'Experiment4'
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Grapes");
console.log(fruits);
fruits.shift();

'Experiment5'
let numbers = [10, 20, 40, 50];
numbers.splice(2,0,30);
console.log(numbers)
numbers.splice(3,1);
console.log(numbers);

'Experiment6'
numbers.push(60);
numbers.splice(3,0,40)
let slice1=numbers.slice(1,3);
let slice2=numbers.slice(numbers.length-3,numbers.length-1);
console.log(numbers);

'Part C'
'Experiment7'
numbers.push(70,80,90,100);
for (let i=0;i<numbers.length;i++){
	console.log(numbers[i]);
}
for (let num of numbers){
	console.log(num);
}

'Experiment8'
let names = ["Rahul", "Priya", "Deeven", "Anjali", "Karthik"];
console.log(names.includes("Deeven"));
console.log(names.indexOf("Anjali"));
console.log(names.indexOf("John"));
'this array does not contain value "John",thats why it returns -1'

'Part D'
'Experiment9'
let marks = [85, 90, 78, 95, 88];
let total=0;
for (let score of marks){
	total+=score;
}
let average=total/marks.length;
console.log(total);
console.log(average);

'Experiment10'
numbers = [15, 78, 23, 99, 42, 67];
numbers.sort((a,b)=>b-a);
console.log(numbers[0]);

'Experiment11'
numbers = [12, 7, 18, 21, 30, 45, 50, 63];
let count=0;
for (let ev of numbers){
	if (ev%2===0){
		count++;
	}
}
console.log(count);

'Experiment12'
numbers = [10, 20, 30, 40, 50];
numbers.reverse();
console.log(numbers)
let reversed=[];
for (let rev of numbers){
	reversed.unshift(rev);
}
console.log(reversed);

'Challenges'
'Challenge1'
function calculateArraySum(arr){
	let sum=0;
	for (let num of arr){
		sum+=num;
	}
	return sum;
}
let result=calculateArraySum([10, 20, 30, 40, 50]);
console.log(result);

'Challenge2'
function findSmallest(arr){
	arr.sort((a,b)=>a-b);
	return arr[0];
}
result=findSmallest([12, 7, 18, 21, 30, 45, 50, 63]);
console.log(result);

'Challenge3'
numbers = [10, -5, 0, 20, -8, 0, 15, -3];
let pos=0;
let neg=0;
let zer=0;
for (let num of numbers){
	if (num>0){
		pos++;
	}else if(num===0){
		zer++;
	}else{
		neg++;
	}
}
console.log(pos);
console.log(neg);
console.log(zer);

'Challenge4'
function searchElement(arr,target){
	let count=0;
	for (let num of arr){
		if (num===target){
			count++;
		}
	}
	if (count>0){
		return true;
	}
	return false;
}
result=searchElement([12, 7, 18, 21, 30, 45, 50, 63],21);
console.log(result);

'Challenge5'
numbers = [10, 20, 10, 30, 20, 40, 30, 50];
let newarr=[];
for (let num of numbers){
	if (newarr.includes(num)){
	}else{
		newarr.push(num);
	}
}
console.log(newarr);

'Challenge6'
numbers = [10, 50, 30, 50, 40, 20];
let largest=-Infinity;
let secondLargest=-Infinity;
for (let num of numbers){
	if (num>largest){
		secondLargest=largest;
		largest=num;
	}else if(num>secondLargest && num!==largest){
		secondLargest=num;
	}else{
	}
}
console.log(secondLargest);

'Challenge7'
numbers = [10, 15, 20, 25, 30, 35, 40];
let evenum=[];
let oddnum=[];
for (let num of numbers){
	if (num===0){
		numbers.shift();
	}else if (num%2===0){
		evenum.push(num);
	}else{
		oddnum.push(num);
	}
}
console.log(evenum);
console.log(oddnum);

'Challenge8'
function analyzeMarks(marks){
	let total=0;
	let pass=0;
	let fail=0;
	let largest=-Infinity;
	let lowest=Infinity;
	for (let mark of marks){
		total+=mark;
		if (mark>=35){
			pass++;
		}else{
			fail++;
		}
		if (mark>largest){
			largest=mark;
		}else if(mark<lowest){
			lowest=mark;
		}else{}
	}
	let average=total/marks.length;
	return [total,average,largest,lowest,pass,fail];
}
result=analyzeMarks([12, 7, 18, 21, 30, 45, 50, 63]);
console.log(result);