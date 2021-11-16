/* Связанный список (один из видов рекурсии) */

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null
		}
	}
};

// Альтернатичный код для создания

let list = { value: 1};
list.next = {value: 2};
list.next.next = {value: 3};