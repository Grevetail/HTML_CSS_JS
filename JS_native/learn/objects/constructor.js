/* Функция-конструктор с методами */

function Calculator () {
	this.read = function () {
		this.value1 = +prompt("Введите первое значение",'');
		this.value2 = +prompt("Введите второе значение",'');
	},
	this.sum = function () {
		return (this.value1 + this.value2);
	},
	this.mul = function () {
		return (this.value1 * this.value2);
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );



/* Функция-конструктор с перезаписью значения */

function Accumulator(startingValue){
	this.value = startingValue;
	this.read = function (){
		this.value += +prompt("Введите число ", 0);
	}
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);


/* Краткие св-ва, св-ва из переменной */

function makeUser(name, age) {
	return {
		name,
		age
	};
}
let user = makeUser("John", 30);

let propObj = '';

for(let key in user){
	propObj += `${key}: ` + user[key] + '\n';
};

alert(propObj);

/* Проверка вызова функции в режиме конструктора */

function User() {
  alert(new.target);
}

new User();