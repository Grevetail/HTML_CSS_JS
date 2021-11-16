/* Вывод односвязного списка */

function printList(list){
	 let x = list;

	 while(x){
	 	alert(x.value);
	 	x = x.next;
	 }
}

//С использованием рекурсии

function printList(list){
	
	alert(list.value);

	if(list.next){
		printList(list.next);
	};
}


/* Вывод списка в обратном порядке */

function printList(list){
	let arr = [];

	while (list){
		arr.push(list.value);
		list = list.next;
	};

	for(let i = arr.length; i > 0; i--){
		alert(arr[i - 1]);
	};

}

// С использованием рекурсии

function printList(list){

	if(list.next){
		printList(list.next);
	}

	alert(list.value);
}