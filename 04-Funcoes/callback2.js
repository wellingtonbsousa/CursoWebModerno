const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Extrair as notas menores que 7

// Sem usar callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(notinha) {
    return notinha < 7
})
console.log(notasBaixas2)

// ou

const notasBaixas3 = notas.filter(notinha => notinha < 7)
console.log(notasBaixas3)
