// Funcao sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2)

// Funcao com retorno
function soma(a, b=0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))