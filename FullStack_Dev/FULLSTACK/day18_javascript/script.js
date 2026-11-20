const maths=90;
const science=28;
const english=85;

let total=maths+science+english;
let average=total/3;
console.log("Total",total);
console.log("Average:",average);

if ((maths<0 || maths>100) || (science<0 || science>100) || (english<0 || english>100)){
	console.log("Invalid Marks");
}else if (maths>=35 && science>=35 && english>=35){
		console.log("Pass") ;
		if (average>=90){
			console.log("A");
		}else if(average>=75){
			console.log("B");
		}else if(average>=60){
			console.log("C");
		}else if(average>=35){
			console.log("D");
		}
		if (average>=75 && maths>=60 && science>=60 && english>=60){
			console.log("Distiinctions:Yes");
		}else{
			console.log("Distinction:No");
		}

}else{
		console.log("Fail");
}

'Challenge1'
let number= 24;
if (number>0){
	console.log("Positve");
}else if(number===0){
	console.log("Zero");
}else{
	console.log("Negative");
}

'challenge2'
let even_odd=number%2==0?"even":"odd";
console.log(even_odd);

'challenge3'
const uname="deeven";
let passwd="Deeven";
let status=1;

if (uname==="deeven" && passwd==="Deeven" && status===1){
	console.log("Login Succesful");
}else{
	console.log("Login Failed");
}

'challenge4'
let bill=50;
if (bill<=40){
	console.log("Minimal Usage");
}else if(bill<=70){
	console.log("Average Usage");
}else{
	console.log("Heavy Usage");
}

'challenge5'
let age=25;
let experience=3;
let eligible=(age>=24 && experience>=2)?"Eligible for job":"Not eligible";
console.log(eligible);

let purchase=2000;
if (purchase>=5000){
	console.log("Discount upto 20%");
}else if(purchase>=2000){
	console.log("Discount upto 10%");
}else{
	console.log("Discount upto 5%");
}