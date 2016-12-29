console.log(isEven(2));
console.log(isEven(3));
function isEven(num) {
	if(num % 2 === 0){
		return true;
	}
	return false;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));
function factorial(num) {
	var answer = 1;
	for(var x = 2; x <= num; x++){
		answer *= x;
	}
	return answer;
}

console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("blah"));
function kebabToSnake(input){
	return input.replace(/-/g, "_");
}