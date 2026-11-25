


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
	}
};

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