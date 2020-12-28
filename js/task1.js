let arr = [];

arr = prompt('Enter the numbers');
const action = prompt('Enter actions with numbers?');

function getValidNum() {
	return arr.split(' ').filter((item, index) => !isNaN(item));
}
function doSum(n) {
	return n.reduce((preValue, item ) => +preValue + +item,);
}

function doSubtraction(n) {
	return n.reduce((preValue, item ) => preValue - item,);
}

function doMultiplication(n) {
	return n.reduce((preValue, item ) => preValue * item,);
}

function doDivision(n) {
	return n.reduce((preValue, item ) => preValue / item,);
}

function getActionResult (arg) {
	let result
	result = (arg === '+' || arg === 'sum') 
	?doSum(getValidNum())
	:result = (arg === '-' || arg === 'subtraction') 
	?doSubtraction(getValidNum())
	:result = (arg === '*' || arg === 'multiplication') 
	?doMultiplication(getValidNum())
	:result = (arg === '/' || arg === 'division') 
	?doDivision(getValidNum())
	:alert('Entered incorrect actions!');
	return result;
}

function showActionResult() {
	alert(`Numbers: ${getValidNum(arr)} \nAction: ${action} \nResult: ${getActionResult(action)}`);
}

showActionResult()










