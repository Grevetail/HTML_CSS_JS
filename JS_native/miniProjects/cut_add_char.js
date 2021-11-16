/* Обрезка строки и добавление символа */

function truncate(str, maxlength){
	if(str.length > maxlength){
		let newStr = str.slice(0,maxlength-1) + '\u2026';
		return newStr;
	} else return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

alert(truncate("Всем привет!", 20));


/* Возврат числа без знака валюты в начале строки */

function extractCurrencyValue(str){
	let i = 0;
	while (str[i].codePointAt(0) < 47 || str[i].codePointAt(0) > 57){
		i += 1;
	};
	return +str.slice(i);	
}

alert( extractCurrencyValue('$120'));