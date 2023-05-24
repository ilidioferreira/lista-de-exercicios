// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

function getFibonacciSeries(lenght) {
    if (lenght === 1) {
        let series = [1]
        return series
    } else if (lenght === 2) {
        let series = [1, 1]
        return series
    } else {
        let series = [1, 1]
        for (var i = 3; i <= lenght; i++) {
            let lastItens = series.slice(-2);
            let nextNumber = lastItens.reduce((a, b) => a + b);
            series.push(nextNumber)
        }
        return series
    }
}

const a = getFibonacciSeries(10);
console.log(a);