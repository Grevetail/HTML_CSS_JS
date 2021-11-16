/* Функция принимающая только число */

function readNumber(){
	let num;
	
	do{
		num = prompt("Введите число",'');
	} while (!isFinite(num));

	if (num === null || num.trim() === '') return null;

	return +num; 
}

alert(`вы ввели ${readNumber()}`);