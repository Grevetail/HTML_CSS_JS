 /* Функция по диапазону, не изменяет исходный массив */

function filterRange(arr, a, b){
	return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)


/* Фильтрация по диапазону с изменением исходного массива */

function filterRangeInPlace(arr, a, b) {
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < a || arr[i] > b){
			arr.splice(i,1);
			i--;
		}
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr );


/* Сортировка в порядке убывания */

let arr = [-5, 2, 1, -10, -8];

arr.sort((a, b) => b - a);

alert(arr);


/* Сортировка массива без изменения */

 function copySort(arr){
 	let arrCopy = arr.slice(); //копирование массива
 	return arrCopy.sort();
 }

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySort(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)