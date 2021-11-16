/* Сделать первый символ заглавным */

function ucFirst(str){
	if (!str) return str;

	let str1 = str[0].toUpperCase() + str.slice(1);
	return str1;
}

alert(ucFirst("вася") == "Вася");