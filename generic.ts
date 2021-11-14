const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayOfString: Array<string> = ['Alex', 'Nika', 'Dima'];

function reverse<T>(array: T[]): T[] {
	return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfString));
