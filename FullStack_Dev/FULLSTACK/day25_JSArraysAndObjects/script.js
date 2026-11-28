'Experiment1'
let products=[
	{id:1,name:"Laptop",price:50000,stock:10},
	{id:2,name:"Mobile",price:20000,stock:15},
	{id:3,name:"Keyboard",price:1500,stock:30}
];

console.log(products[0]);
console.log(products[1]);

console.log(products[0].name);
console.log(products[1].price);
console.log(products[2].stock);

let property="name";
console.log(products[0][property]);

console.log(products[1][property]);
console.log(products[2].price);
console.log(products[0].stock);
for (let i of products){
	i.category="RawMaterial";
}
console.log(products[0].category);

'Experiment2'
for (let i=0;i<products.length;i++){
	console.log(products[i].name);
}
for (let i of products){
	console.log(i.name);
}
for (let product of products){
	console.log(
		product.name,
		product.price,
		product.stock,
		product.category
	);
}

'Experiment3'
let expensiveProduct=products.filter(function(product){
	return product.price>10000;
});
console.log(expensiveProduct);

let lowStockProduct=products.filter(product=>product.stock<20);
console.log(lowStockProduct);

products[3]={
	id:4,
	name:"Mouse",
	price:800,
	stock:50,
	category:"RawMaterial"
};
let category1="Electronics";
let category2="Accessories";
products[0].category=products[1].category=category1;
products[2].category=products[3].category=category2;
let electronics=products.filter(product=>product.category==="Electronics");
console.log(electronics);

let priceBelow5K=products.filter(product=>product.price<5000);
let stockAbove25=products.filter(product=>product.stock>25);
let accessories=products.filter(product=>product.category==="Accessories");
console.log(priceBelow5K);
console.log(stockAbove25);
console.log(accessories);

'Experiment4'
let product=products.find(product=>product.id===3);
console.log(product);
product=products.find(product=>product.name==="Laptop");
console.log(product);
product=products.find(product=>product.name==="Tablet");
console.log(product);

product=products.find(product=>product.id===2);
console.log(product);
product=products.find(product=>product.name==="Mouse");
console.log(product);
product=products.find(product=>product.price===800);
console.log(product);
product=products.find(product=>product.name==="MousePad");
console.log(product);

'Experiment5'
let productNames=products.map(product=>product.name);
console.log(productNames);
let productPrices=products.map(product=>product.price);
console.log(productPrices);
let productSummary=products.map(product=>({name:product.name,price:product.price}));
console.log(productSummary);

let productStock=products.map(product=>product.stock);
console.log(productStock);
let productSummaryWithCategory=products.map(product=>({name:product.name,category:product.category}));
console.log(productSummaryWithCategory);
let productTotalValue=products.map(product=>product.price*product.stock);
console.log(productTotalValue);

'Experiment6'
let totalInvetoryValue=products.reduce((total,product)=>total+(product.price*product.stock),0);
console.log(totalInvetoryValue);

let totalInvetoryStock=products.reduce((total,product)=>total+product.stock,0);
console.log(totalInvetoryStock);
let totalProductsabove20=products.reduce((total,product)=>total+(product.stock>20),0);
console.log(totalProductsabove20);

'Experiment7'
let filterdProducts=products.filter(product=>product.category==="Electronics"&&product.price>15000);
console.log(filterdProducts);

let names=filterdProducts.map(product=>product.name);
console.log(names);

let result=products
	.filter(product=>product.category==="Electronics"&&product.price>15000)
	.map(product=>product.name);
console.log(result);