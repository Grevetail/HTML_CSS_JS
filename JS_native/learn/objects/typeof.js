/* Работа с typeof */

function multiplyNumeric(obj){
	for(let property in obj){
		if(typeof obj[property] == "number"){ 
			obj[property] *= 2;
		}
	}
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  property: NaN,
  property1: null,
  property2: undefined,
};

multiplyNumeric(menu);

for(let key in menu){
	alert(key + " : " + menu[key]);
}