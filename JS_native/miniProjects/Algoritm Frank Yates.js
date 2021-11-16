/* Алгоритм одинаковой вероятности "Тасование Фишера - Йетса" 
- перебор с конца массива - Современный алгоритм
- 0 <= j <= i случайное число в этом промежутке
- обмен местами a[i] и a[j], деструктирующее присваивание, вместо заведение ещё одной переменной */

function shuffle(arr){
	for(let i = arr.length - 1; i >= 1; i--){
		let j = Math.floor(Math.random()*(i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);