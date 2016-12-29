printReverse([1,2,3,4]);
printReverse([4,3,2,1]);
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
max([1,2,3]);
max([-5,100]);


function printReverse(inputArr) {
	for(var x = inputArr.length-1; x >= 0; x--) {
		console.log(inputArr[x]);
	}
}

function isUniform(inputArr) {
	var isUniform = true;
	for(var i = inputArr.length - 1; i >= 1; i--) {
		if(inputArr[i] !== inputArr[i-1]){
			isUniform = false;
		}
	}
	console.log(isUniform);
}

function max(inputArr) {
	console.log(Math.max.apply(null, inputArr));
}