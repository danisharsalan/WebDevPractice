console.log("Print all numbers between -10 and 19");
for(var x = -10; x <= 19; x++){
	console.log(x);
}

console.log("Print all even numbers between 10 and 40");
for(var x = 10; x <= 40; x += 2){
	console.log(x);
}

console.log("Print all odd numbers between 300 and 333");
for(var x = 300; x <= 333; x++){
	if(x % 2 !== 0){
		console.log(x);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var x = 5; x <= 50; x++){
	if(x % 5 === 0 && x % 3 === 0){
		console.log(x);
	}
}