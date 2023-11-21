window.onload = function () {
    drawPascal(10);
}

var drawPascal = function (n) {
    var szuloElem = document.getElementById('pascal');
    for (var sor = 0; sor < n; sor++) {
        var ujSor = document.createElement('div');
        ujSor.classList.add('sor');
        szuloElem.appendChild(ujSor);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujOszlop = document.createElement('div');
            ujOszlop.classList.add('elem');
            var ertek = calculatePascalValue(sor, oszlop);
            ujOszlop.innerHTML = ertek;
            ujSor.appendChild(ujOszlop);
        }
    }
}

var calculatePascalValue = function (row, col) {
    if (col === 0 || col === row) {
        return 1;
    } else {
        return calculatePascalValue(row - 1, col - 1) + calculatePascalValue(row - 1, col);
    }
}