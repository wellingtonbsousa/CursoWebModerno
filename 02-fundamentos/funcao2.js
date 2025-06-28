// Armazenando uma funcao em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao Arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito de Arrow Function
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))