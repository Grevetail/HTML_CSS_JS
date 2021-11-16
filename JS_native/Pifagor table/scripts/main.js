let str = prompt('Введите натуральное число для построения таблицы Пифагора', '0').trim();

if (!str.includes(',') && !str.includes('.') && !(+str)) {
    alert(`Введённое число "${str}" должно быть натуральным, попробуйте ещё раз.`);
} else {
    const n = parseInt(str.trim());
    
    let result = [];

    for(let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++){
            result[i][j] = (i+1)*(j+1);
        }
    }
    console.log(result);

/*Визуализация в HTML, можно совместить с реализацией выше*/
    
    let html = "<table><th></th>";

    for(let i = 0; i < result.length; i++){
        html += `<th>${i+1}</th>`;
    }

    for(let i = 0; i < result.length; i++){
        html += `<tr>`;
        for(let j = 0; j < n; j++){
            if (j==0) {
                html += `<td>${(i+1)}</td>`;
            }
            html += `<td>${(i+1)*(j+1)}</td>`;
        }
        html += "</tr>";
    }

    html += '</table>';

    document.querySelector('.pifagor').innerHTML = html;
}



