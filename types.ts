const age: number = 25;
const isLoading: boolean = true;
let nameUser: string = 'Alex';

nameUser = 'Dima';

const float: number = 4.2;
const num: number = 3e10;
const message: string = 'hello';
const numberArray: number[] = [1, 2, 3, 4, 5, 6];
const numberArraySecond: Array<number> = [1, 2, 3, 4, 5, 6];
const stringArray: Array<string> = ['Alex', 'Vika', 'Nikita'];

//Tuple
const contact: [number, string] = [12432423, 'Alex'];

//Any
let variable: any = 42;
variable = 'Alex';
variable = [];

//Function

// function return value
function sayName(name: string): string {
	return name;
}
sayName('Alex');
// function don't return value
function sayNameSecond(name: string): void {
	console.log(name);
}
sayNameSecond('Victor');

//Never

function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) console.log('Hello');
}

//Types

type Login = string;
type Age = number;

const login: Login = 'admin';
const ageUser: Age = 25;

type ID = string | number;

const idUser: ID = '1234';
const idUserSecond: ID = 24;

type SomeType = string | null | undefined;
