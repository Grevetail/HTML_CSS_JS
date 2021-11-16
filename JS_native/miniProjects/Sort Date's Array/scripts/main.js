let array = [
    {date: '12.04.1999'},
    {date: '01.06.2000'},
    {date: '15.12.2000'},
    {date: '04.10.2020'},
    {date: '14.02.2008'},
    {date: '21.05.2009'},
    {date: '18.03.2010'},
    {date: '04.10.1995'},
    {date: '24.09.2013'},
    {date: '27.11.2019'},
];
console.log('Первоначальный массив:');
array.forEach(el => console.log(el.date));

array.sort(function(a, b) {
    pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    a = new Date((a.date).replace(pattern,'$3-$2-$1'));
    b = new Date((b.date).replace(pattern,'$3-$2-$1'));
    return a - b
});

console.log('\nРезультат выполнения скрипта:');
array.forEach(el => console.log(el.date));