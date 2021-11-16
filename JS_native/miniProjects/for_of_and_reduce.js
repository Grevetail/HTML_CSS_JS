/* Сумма зарплат */

// с помощью for...of

function sumSalaries(salaries){
	let sum = 0;

	for(let value of Object.values(salaries)){
		sum += value;
	};

	return sumZarplat;
}

// с помощью reduce

function sumSalaries(salaries){
	return Object.values(salaries).reduce((a, b) => a + b, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );