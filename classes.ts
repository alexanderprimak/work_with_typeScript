class Typescript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}
	info(name: string): string {
		return `${name}:Typescript version is ${this.version}`;
	}
}

const typeScript = new Typescript('1.2.3');

const version = typeScript.info('TypeScript');

console.log(version);

// class Car {
// 	readonly model: string;
// 	readonly numberOfWheels: number = 4;

// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }

class Car {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {}
}

//=====================================

class Animal {
	protected voice: string = '';
	public color: string = 'black';

	private go() {
		console.log('go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string) {
		this.voice = voice;
	}
}
const cat = new Cat();
cat.setVoice('hello');
console.log(cat.color);

//////=========================================

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render');
	}
	info(): string {
		return 'This is info';
	}
}

const component = new AppComponent();
component.render();
