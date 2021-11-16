/* Формирование массива из неповторяющихся значений */

function unique(arr){
	let result = [];
	for(let item of arr){
		if (!result.includes(item)) result.push(item);
	};
	return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );


/* Возврат массива уникальных значений */

function unique (arr){
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );