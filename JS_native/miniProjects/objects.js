/* Трансформировать в массив имён */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша


/* Трансформировать в объекты */

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, 
	id: item.id})); // скобки в выражении обязательны, иначе не работает

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


/* Отсортировть пользователей по возрасту */

function sortByAge(users){
	return users.sort ((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


/* Подсчёт кол-ва св-в объекта */

function count(obj){
	return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );