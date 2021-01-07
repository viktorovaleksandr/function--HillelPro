const value = prompt('Enter the numbers');
const action = prompt('Enter actions with numbers?');

function getValidNumber(number) {
	const validNumber = number.split(' ').map(Number).filter(item => !isNaN(item));
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

function getActionResult(action,number) {
	if (action === '+' || action === 'sum') {
		return doSum(number);
	} else if (action === '-' || action === 'subtraction') {
		return doSubtraction(number);
	} else if (action === '*' || action === 'multiplication') {
		return doMultiplication(number);
	} else if (action === '/' || action === 'division') {
		return doDivision(number);
	} else {
		return alert('Entered incorrect actions!');
	}
}

function showActionResult() {
	alert(`\nResult: ${getActionResult(action,getValidNumber(value))}`);
}
showActionResult()










