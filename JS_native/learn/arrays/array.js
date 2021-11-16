/* Работа с одномерным массивом */

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[(styles.length/2).toFixed(0) - 1] = "Классика";

styles.shift();
alert(styles[0]);

styles.unshift("Рэп", "Регги");

alert(styles);