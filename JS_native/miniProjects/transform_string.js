/* Преобразование строки вида «my-short-string» в «myShortString». */

function camelize(str){
	let arr = str.split('-');
	let result = arr.map(item => item[0].toUpperCase() + item.slice(1));
	return result.join('');
}

alert(camelize("background-color"));