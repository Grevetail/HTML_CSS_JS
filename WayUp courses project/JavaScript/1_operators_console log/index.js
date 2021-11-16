/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/

const country = "Russia",
      city = "Sain-Petersburg",      
      population = 4991000,
      football_stadium = true;

function AddInfo(country, city, population, football_stadium) {
    return {
        country,
        city,
        population,
        football_stadium
    }
}

let all_info = AddInfo(country, city, population, football_stadium);

console.log(all_info);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

let hight = 40,
      width = 70;

function Square (h, w) {
    return (h * w);
}

const square = Square(hight, width);

console.log("Площадь прямогугольника " + `${square}` + " см\u00B2");


/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

let time = 2,
      speedOfFirst = 95,
      speedOfSecond = 114;

function Distance(speed1, time1, speed2, time2) {
    return (speed1 * time1 + speed2 * time2);
}

const distance = Distance(speedOfFirst, time, speedOfSecond, time);

console.log("Города находятся на растоянии " + `${distance}` + " км. друг от друга");

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

switch (randomNumber < 20) {
    case true:
        console.log("randomNumber меньше 20");
        break;
    case false:
        switch (randomNumber > 50){
            case true:
                console.log("randomNumber больше 50");
                break;
            case false:
                console.log("randomNumber больше 20, и меньше 50");
                break;
        };
        break;        
}

