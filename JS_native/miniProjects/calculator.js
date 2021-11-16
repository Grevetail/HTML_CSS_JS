/* Калькулятор */

function sum (a, b){
	a = a * 1e3;
	b = b * 1e3;
	return (a + b)/1e3;
}

function div (a, b){
	a = a * 1e3;
	b = b * 1e3;
	return (a / b);
}

function mult (a, b){
	a = a * 1e3;
	b = b * 1e3;
	return (a * b)/1e6;
}

function sub (a, b){
	a = a * 1e3;
	b = b * 1e3;
	return (a - b)/1e3;
}

let a, b, operator;

do{
	a = +prompt("Введите 1 число:",'');
	b = +prompt("Введите 2 число:",'');
} while(!isFinite(a) && !isFinite(b));

while(!Object.is(operator, '/') && 
	  !Object.is(operator, '*') && 
	  !Object.is(operator, '+') && 
	  !Object.is(operator, '-')){
	operator = prompt("Введите операцию",'');
}

switch(operator){
	case '+': 
	  alert(`${a} + ${b} = ${sum(a, b)}`);
	  break;
	case '-':
	  alert(`${a} - ${b} = ${sub(a, b)}`);
	  break;
	case '*':
	  alert(`${a} * ${b} = ${mult(a, b)}`);
	  break;
	default:
	  alert(`${a} / ${b} = ${div(a, b)}`);
}


/* Расширяемый калькулятор - методы хранятся во внутреннем объекте */

function Calculator(){
	
	this.method = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	};
	
	this.calculate = function (str){
		let arr = (str.trim()).split(" ");
		
		if(!isFinite(+arr[0]) || !isFinite(+arr[2]) || 
			arr.length != 3 || !this.method[arr[1]])
			return alert(`Ошибка в выражении ${str}. Попробуйте снова.`);
		
		return this.method[arr[1]](+arr[0], +arr[2]);
	};

	this.addMethod = function (name, func){
		this.method[name] = func;
	};

}