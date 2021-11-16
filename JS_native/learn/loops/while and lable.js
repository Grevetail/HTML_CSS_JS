/* Цикл while */

let userName;
while (!userName)
	userName = prompt("Введите имя пользователя:",'');
alert(userName);


/* Цикл while () {...} */

let i = 0;
while (i < 3){
	alert(`number ${i}!`);
	i++;
}


/* Использование меток */

let n;
while(true){
	n = +prompt('Введите натуральное число больше 1','');
	if(n >= 2) break;
}
lable: for(let i = 2; i <= n; i++){
	   	for(let j = 2; j < i; j++){
			if (i % j == 0) continue lable;
		}
		alert(i);
}
