/* Цикл for(;;) {...} */

let number='';
for(let i = 2; i<11; i++){
	if(i % 2 !== 0) continue;
	number = number + i + ' ';
}
alert(number.trim()); //метод trim удаляет пробелы в начале и в конце строки
