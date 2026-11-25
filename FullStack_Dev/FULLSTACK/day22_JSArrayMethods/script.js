'Practical Exercise'
'Part A'
'Experiment1'
let numbers=[10,20,30,40,50];
numbers.forEach(function(num){
	console.log(num);
	num*=3;
	console.log(num);
});

'Experiment2'
numbers=[5,10,15,20,25];
console.log(numbers);
let newnumbers=numbers.map(function(num){
	return num*2;
});
console.log(newnumbers);
newnumbers=numbers.map(num=>num*num);
console.log(newnumbers);

'Experiment3'
let names=["rahul","priya","deeven","anjali"];
let newnames=names.map(name=>name.toUpperCase());
console.log(newnames);

'Part B'
'Experiment4'
numbers=[12,45,7,80,33,100,25,60];
newnumbers=numbers.filter(num=>num>30);
console.log(newnumbers);
newnumbers=numbers.filter(num=>num%5===0);
console.log(newnumbers);
newnumbers=numbers.filter(num=>num%2===0);
console.log(newnumbers);

'Experiment5'
numbers=[25,45,80,32,90,18,55,35];
let pass=numbers.filter(num=>num>=35);
let fail=numbers.filter(num=>num<35);
let firstClass=numbers.filter(num=>num>=80);
console.log(pass);
console.log(fail);
console.log(firstClass);

'Part C'
'Experiment6'
numbers=[10,25,35,45,60,70];
console.log(numbers.find(num=>num>40));
console.log(numbers.find(num=>num%7===0));
console.log(numbers.findIndex(num=>num>50));
console.log(numbers.find(num=>num>100));

'Experiment7'
names=["Rahul","Priya","Deeven","Anjali","Karthik"];
console.log(names.find(name=>name==="Deeven"));
console.log(names.findIndex(name=>name==="Anjali"));
console.log(names.find(name=>name==="John"));
console.log(names.findIndex(name=>name==="John"));

'Part D'
'Experiment8'
numbers=[12,18,25,30,42];
console.log(numbers.some(num=>num>40));
console.log(numbers.every(num=>num>10));
console.log(numbers.every(num=>num%2===0));
console.log(numbers.some(num=>num%7===0));

'Experiment9'
let marks = [45,60,80,36,90];
console.log(marks.some(mark=>mark>=90));
console.log(marks.every(mark=>mark>=35));
console.log(marks.every(mark=>mark>50));
console.log(marks.some(mark=>mark<35));

'Challenges'
'Challenge1'
numbers=[5,10,15,20,25,30];
newnumbers=numbers.map(num=>num*2);
console.log(newnumbers);
console.log(newnumbers.filter(num=>num>30));

'Challenge2'
names=["rahul","priya","deeven","anjali","karthik"];
newnames=names.map(name=>name.toUpperCase());
console.log(newnames.filter(name=>name.length>5));
console.log(newnames.find(name=>name.length===6));

'Challenge3'
let prices=[100,250,400,800,1200,50,600];
console.log(prices.filter(price=>price>500));
console.log(prices.some(price=>price>1000));
console.log(prices.every(price=>price>50));
console.log(prices.find(price=>price>300));

'Challenge4'
marks=[25,45,60,32,90,18,55,35,100];
pass=marks.filter(mark=>mark>=35);
fail=marks.filter(mark=>mark<35);
let newmarks=marks.map(mark=>mark+5);
console.log(pass);
console.log(fail);
console.log(newmarks);
console.log(marks.every(mark=>mark>35));
console.log(marks.some(mark=>mark===100));

'Challenge5'
let products=[150,500,750,100,1200,350,900];
console.log(products.find(product=>product>700));
console.log(products.findIndex(product=>product>700));
console.log(products.filter(product=>product>=300 && product<=900));
console.log(products.every(product=>product>0));

'Challenge6'
numbers = [10,15,20,25,30,35,40,45];
newnumbers=numbers.filter(num=>num>20);
console.log(newnumbers);
newnumbers=newnumbers.map(num=>num*3);
console.log(newnumbers);
console.log(newnumbers.filter(num=>num>100));

'Challenge7'
function analyzeNumbers(numbers){
	let filteredNumbers=numbers.filter(num=>num%2===0);
	let squareNumbers=filteredNumbers.map(num=>num*num);
	let great50=numbers.some(num=>num>50);
	let allPositve=numbers.every(num=>num>0);
	return [filteredNumbers,squareNumbers,great50,allPositve];
}
console.log(analyzeNumbers([10,15,20,55,8,60,3]));