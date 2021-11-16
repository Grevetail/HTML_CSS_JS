/* Работа с датой */

// Создание объектов по местному времени

alert(new Date('2012-02-20T03:12')); //new Date(datestring)

alert(new Date(2012, 1, 20, 3, 12)); // new Date(year, month, date, hours, minutes, seconds, ms)


/* Отображение дня недели */

// С использованием switch case

function getWeekDay(date){
	switch(date.getDay()){
		case 0: 
			return "ВС";
			break;
		case 1: 
			return "ПН";
			break;
		case 2: 
			return "ВТ";
			break;
		case 3: 
			return "СР";
			break;
		case 4: 
			return "ЧТ";
			break;
		case 5: 
			return "ПТ";
			break;
		case 6: 
			return "СБ";
			break;
	};
}

// С использованием массива
function getWeekDay(date){
	let day = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
	return day[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );


/* День недели в европейской нумерации */

function getLocalDay(date){
	let day = date.getDay();
	
	if(day) return day;
	
	return (7);
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );


/* Получение числа дня, который был n дней назад */

function getDateAgo(date, days){
	return new Date(date.getTime() - days*24*60*60*1000).getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


/* Последнее число месяца */

// С помощью вычисления даты

function getLastDayOfMonth(year, month){
	let date = new Date(year, month, 31);
	
	if(date.getMonth() == month){
		return 31;
	} else {
		return (31 - date.getDate());
	};

}

// С помощью автоисправления

function getLastDayOfMonth(year, month){
	let date = new Date(year, month+1, 0);
	return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));


/* Кол-во секунд прошедших за сегодня */

function getSecondsToday(){
	let now = new Date();
	let startDay = new Date(now.getFullYear(),now.getMonth(),now.getDate());

	return alert(Math.round((now - startDay)/1000));
}

getSecondsToday();


/* Секунд осталось до завтра */

function getSecondsToTomorrow(){
	let now = new Date(),
		endDay = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);

	return alert(Math.round((endDay - now)/1000));
}


/* Форматировние относительно даты */

function formatDate(date){
	let now = new Date(),
		delta = Math.round((now.getTime() - date.getTime())/1000, -3);

	if (delta < 1) return 'прямо сейчас';
	else if (delta < 60) return `${Math.floor(delta)} сек. назад`; 
	else if (delta < 3600) return `${Math.floor(delta/60)} мин. назад`;
	
	let d = [
		'0' + now.getDate(),
		'0' + (now.getMonth() + 1),
		'' + now.getFullYear(),
		'0' + now.getHours(),
		'0' + now.getMinutes()
	].map(components => components.slice(-2));

	return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':');
	
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );