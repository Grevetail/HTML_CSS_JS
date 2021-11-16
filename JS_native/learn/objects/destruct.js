/* Деструктурирующее присваивание в объекте */

let user = {
	name: "John",
	years: 30
};

let {name, years: age, isAdmin: isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false