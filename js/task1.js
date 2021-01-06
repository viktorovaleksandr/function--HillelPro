const numbers = prompt('Enter the numbers');
const action = prompt('Enter actions with numbers?');

function getValidNumber() {
	const validNumber = numbers.split(' ').map(Number).filter(item => !isNaN(item));
	return validNumber;
}

function doSum(number) {
	return number.reduce((preValue, item ) => preValue + item,);
}

function doSubtraction(number) {
	return number.reduce((preValue, item ) => preValue - item,);
}

function doMultiplication(number) {
	return number.reduce((preValue, item ) => preValue * item,);
}

function doDivision(number) {
	return number.reduce((preValue, item ) => preValue / item,);
}

function getActionResult (arg) {
	let result;
	if (arg === '+' || arg === 'sum') {
		result = doSum(getValidNumber());
	} else if (arg === '-' || arg === 'subtraction') {
		result = doSubtraction(getValidNumber());
	} else if (arg === '*' || arg === 'multiplication') {
		result = doMultiplication(getValidNumber());
	} else if (arg === '/' || arg === 'division') {
		result = doDivision(getValidNumber());
	} else {
		alert('Entered incorrect actions!');
	}
	return result;
}

function showActionResult() {
	alert(`Numbers: ${getValidNumber(numbers)} \nAction: ${action} \nResult: ${getActionResult(action)}`);
}
showActionResult()










