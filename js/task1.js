// 1) С помощью prompt спрашиваем у пользователя действие.
// 2) С помощью prompt спрашиваем у пользователя числа. Числа вводяться через пробел.
// 3) Выполняем то действие, которое выбрал пользователь со всеми числами.
// 4) Если ввёл действие которого нет (не +, -, *, /) то выводим соответсвующее сообщение и не выполняем код дальше.
// 5) Удаляем все значения, которые не являются числами.

let arr = [];

const action = prompt('Enter actions with numbers?');
arr = prompt('Enter the numbers');

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

function getResultWithNum (arg) {
	result = (arg === '+' || arg === 'sum') ? doSum(getValidNum()): 
	result = (arg === '-' || arg === 'subtraction') ? doSubtraction(getValidNum()):
	result = (arg === '*' || arg === 'multiplication') ? doMultiplication(getValidNum()):
	result = (arg === '/' || arg === 'division') ? doDivision(getValidNum()):alert('Enter the correct action');
	return result;
}

function showResultWithNum() {
	alert(`result: \n${getResultWithNum(action)}`);
}

showResultWithNum()













