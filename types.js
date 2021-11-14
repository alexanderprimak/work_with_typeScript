var age = 25;
var isLoading = true;
var nameUser = 'Alex';
nameUser = 'Dima';
var float = 4.2;
var num = 3e10;
var message = 'hello';
var numberArray = [1, 2, 3, 4, 5, 6];
var numberArraySecond = [1, 2, 3, 4, 5, 6];
var stringArray = ['Alex', 'Vika', 'Nikita'];
//Tuple
var contact = [12432423, 'Alex'];
//Any
var variable = 42;
variable = 'Alex';
variable = [];
//Function
// function return value
function sayName(name) {
	return name;
}
sayName('Alex');
// function don't return value
function sayNameSecond(name) {
	console.log(name);
}
sayNameSecond('Victor');
//Never
function throwError(message) {
	throw new Error(message);
}
function infinite() {
	while (true) console.log('Hello');
}
var login = 'admin';
var ageUser = 25;
var idUser = '1234';
var idUserSecond = 24;
