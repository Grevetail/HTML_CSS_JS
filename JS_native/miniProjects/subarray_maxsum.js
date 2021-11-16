/*Подмассив наибольшей суммы */

function getMaxSubSum(arr){
	let sumMin = 0, sumMax = 0;
	
	for(let num of arr){
		
		if(num >= 0){
			sumMin += num;
			sumMax = (sumMin > sumMax) ? sumMin : sumMax;
		} else if (sumMin != 0){
			sumMax = (sumMin > sumMax) ? sumMin : sumMax;
			sumMin = 0;
		};	
	};
	
	return sumMax;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0