interface Person {
	name: string;
	age: number;
}

type PersonKeys = keyof Person;

let myName: PersonKeys = 'name';
myName = 'age';

type User = {
	_id: number;
	name: string;
	email: string;
	createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>;

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let us: UserKeysNoMeta = 'name';

console.log(us);
