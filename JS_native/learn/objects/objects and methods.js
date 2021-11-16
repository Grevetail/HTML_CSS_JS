/* Простые объекты "plain object" */

let user = {
	name : "John",
	surname : "Smith"
}

user.name = "Pete";//изменение name
alert(user.name);

delete user.name;//удаление св-ва name
alert(user.name === undefined);



/* Функция проверки наличия свойств у объекта */

function isEmpty (obj){
	for(let property in obj){
		return false;
	}
	return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); //false


/* Сумма свойств объектов */

function sum(obj) {
	let sum = 0;
	for(let name in obj){
		sum = sum + obj[name];
	}
	return sum;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

alert(sum(salaries));