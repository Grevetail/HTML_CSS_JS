/* Массив слов очищенный от анаграмм */

// С помощью множества Set

function aclean(arr){
	let set = new Set(),
		result = [];
	
	arr.forEach((item, index) => {
		item = item.toLowerCase().split('').sort().join('');
		if (!set.has(item)) {
			set.add(item);
			result.push(arr[index]);
		}
	});

	return result;
}

// С помощью коллекции Map

function aclean(arr){
	let map = new Map();

	for(let item of arr){
		map.set(item.toLowerCase().split('').sort().join(''), item);
	};

	return Array.from(map.values());
}

// С помощью коллекции Object

function aclean(arr){
	let obj = {};

	for(let item of arr){
		obj[item.toLowerCase().split('').sort().join('')] = item;
	};

	return Object.values(obj);
}


let arr = ["Nap", "teachers", "Cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );