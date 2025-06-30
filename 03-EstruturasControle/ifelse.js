const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado! a função espera um Number e recebe uma String => sempre false