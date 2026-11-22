'Part A'
let table=5;
for (let i=1;i<=10;i++){
	console.log(table,"x",i,"=",table*i);
}

'Part B'
let sum=0;
for (let i=1;i<=100;i++){
	sum+=i;
}
console.log(sum);

'Part C'
for (let i=2;i<=50;i+=2){
	console.log(i);
}

'Part D'
for (let i=1;i<=20;i++){
	console.log(i);
	if (i%2===0){
		console.log("Even");
	}else{
		console.log("odd");
	}
	if (i%5===0){
		console.log("Divisible by 5");
	}
}

'Part E'
for (let i=1;i<=5;i++){
	let line="";
	for (let j=1;j<=i;j++){
		line+="*";
	}
	console.log(line);
}

'Challenge 1'
for (let i=20;i>0;i--){
	console.log(i);
}

'Challenge 2'
sum=0;
for (let i=1;i<=100;i++){
	if (i%2===0){
		sum+=i;
	}
}
console.log(sum);

'Challenge 3'
let fact=1;
for (let i=5;i>0;i--){
	fact*=i;
}
console.log(fact);

'Challenge 4'
table=7;
for (let i=1;i<=10;i++){
	console.log(table,"x",i,"=",table*i);
}

'Challenge 5'
let count=0;
for (let i=1;i<=100;i++){
	if(i%3===0){
		count++;
	}
}
console.log(count);

'Challenge 6'
for (let i=1;i<=100;i++){
	if(i%3===0){
		continue;
	}
	console.log(i);
}

'Challenge 7'
for (let i=1;i<=5;i++){
	let line="";
	for (let j=1;j<=i;j++){
		line+=j;
	}
	console.log(line);
}

'Challenge 8'
for (let i=1;i<=100;i++){
	if(i===30){
		break;
	}
	console.log(i);
}