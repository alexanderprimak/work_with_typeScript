interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		height: number;
	};
}

const object: Rect = {
	id: '25',
	size: {
		width: 25,
		height: 30,
	},
};

const objectSecond: Rect = {
	id: '12312',
	size: {
		width: 45,
		height: 30,
	},
};

objectSecond.color = '#fff';

const objectThree = {} as Rect;
const objectFour = <Rect>{};

objectThree.color = '#fff';
objectFour.color = '#fff';

//========================================

interface RectWithArea extends Rect {
	getArea: (width: number, height: number) => string;
}

const objectFive: RectWithArea = {
	size: {
		width: 25,
		height: 30,
	},
	id: '234',

	getArea: (width, height) => {
		return ` Площадь равна:${width * height}`;
	},
};

console.log(objectFive.getArea(objectFive.size.width, objectFive.size.height));

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(data: Date): void {
		this.time = data;
	}
}

//====================================
interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: '1px solid red',
	marginTop: '2px',
	borderRadius: '5px',
};

