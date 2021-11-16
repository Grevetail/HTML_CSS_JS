/* Сумма введёных значений массива */

function sumInput(){
	let arr = [], num, sum = 0;
	
	do{
		num = +prompt('Введите число:');
		if (isFinite(num)) arr.push(num);
	} while(isFinite(num) && num!=""); 

	for(let i of arr){
		sum += i;
	};

	return sum;
}

alert(sumInput());