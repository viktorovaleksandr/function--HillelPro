let arr = [];
arr = prompt('Enter the numbers');
let action = prompt('Enter actions with numbers?');

function getValidNum() {
	return arr.split(' ').filter((item, index) => !isNaN(item));
}
function doSum(n) {
	return n.reduce((item, index ) => +item + +index,0);
}
function doSubtraction(n) {
	return n.reduce((item, index ) => item - index,);
}
function doMultiplication(n) {
	return n.reduce((item, index ) => item * index,);
}
function doDivision(n) {
	return n.reduce((item, index ) => item / index,);
}
function getActionResult (arg) {
	let result
	result = (arg === '+' || arg === 'sum') ? doSum(getValidNum()): 
	result = (arg === '-' || arg === 'subtraction') ? doSubtraction(getValidNum()):
	result = (arg === '*' || arg === 'multiplication') ? doMultiplication(getValidNum()):
	result = (arg === '/' || arg === 'division') ? doDivision(getValidNum()):alert('Entered incorrect actions!');
	return result;
}
function showActionResult() {
	alert(`Result actions with numbers: \n${getActionResult(action)}`);
}

showActionResult()










