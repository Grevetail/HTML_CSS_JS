/* Вычисление сотрудника с максимальной з/п */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
	let arr = Object.entries(salaries);
	
	if(arr.length == 0) return null;
	else return arr.sort(([key1, value1], [key2, value2]) => value2 - value1)[0][0];

}

alert(topSalary(salaries));