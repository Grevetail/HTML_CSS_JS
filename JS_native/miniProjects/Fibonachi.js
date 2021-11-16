/* Вывод n-го числа Фибоначи */
function fib(n){
	
	if (n <= 2) return 1;

	let result = 1;

	for (let i = 3; i <= n; i++){
		result += (i - 1);
	}
	return result;
}

alert(fib(3)); // 2
alert(fib(7)); // 13