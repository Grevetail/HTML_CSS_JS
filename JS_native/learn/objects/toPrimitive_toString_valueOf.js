/* Преобразование объектов в примитивы, метод Symbol.toPrimitive */

let user = {
	name: "John",
	age: 30,

	[Symbol.toPrimitive](hint){
		alert(`hint: ${hint}`);
		return hint == 'string' ? this.name : this.age;
	}
};

alert(+user);
alert(user);


/* Преобразование объектов в примитивы, методы toString/valueOf */

let user = {
	name: "John",
	age: 30,

	// для хинта равного "string"
	toString() {
		return `{name: ${this.name}}`;
	},

	// для хинта равного "number" или "default"
	valueOf() {
		return this.age;
	}
};

alert(user);
alert(+user);