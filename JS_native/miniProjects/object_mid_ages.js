/* Вычисление среднего возраста объектов массива */

function getAverageAge(users){
	let sum = 0;
	for(let item of users){
		sum += item.age;
	};
	return Math.round(sum/users.length);
}

function getAverageAge2(users){
	return Math.round(users.reduce((sum, item) => sum + item.age, 0)/users.length);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge2(arr) );