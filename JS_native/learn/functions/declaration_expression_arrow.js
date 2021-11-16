/* Функция Function Declaration */

function pow(x, n){
	return x**n;
}
let x = +prompt("Введите число",''), n;
while(true){
	n = +prompt("Введите степень - натуральное число >= 1",'');
	if(n >= 1 && n % 1 == 0) break;
}
alert(pow(x, n));


/* Функция Function Expression */

let pow = function (x, n) {
		return x**n;
	};
let x = +prompt("Введите число",''), n;
while(true){
	n = +prompt("Введите степень - натуральное число >= 1",'');
	if(n >= 1 && n % 1 == 0) break;
}
alert(pow(x, n));



/* Функции-стрелки */

let ask = (question, yes, no) => {
	(confirm(question)) ? yes () : no();
}
ask("Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.")
);