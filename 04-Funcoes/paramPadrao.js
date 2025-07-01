// Estratégia 1 para Gerar Valor Padrão
function soma1(a, b, c) {
    a = a || 1 // a recebe a ou 1 se a vier undefined
    b = b || 1
    c = c || 1
    return a + b + c
}
// console.log(soma1(), soma1(3), soma1(1, 2, 3))
// console.log(soma1(0, 0 ,0)) // Como os zeros são falsos -> retorna errado

// Estratégia 2 para Gerar Valor Padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Se for undifined -> pega o valor padrão
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}
// console.log(soma2(), soma2(3), soma2(1, 2, 3))
// console.log(soma2(0, 0 ,0))

// Estratégia 3 para Gerar Valor Padrão
function soma3(a, b, c) {
    a = 0 in arguments ? a : 1 // Se não existe valor dentro de arguments -> pega o valor padrão
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}
// console.log(soma3(), soma3(3), soma3(1, 2, 3))
// console.log(soma3(0, 0 ,0))

// Estratégia 4 para Gerar Valor Padrão
function soma4(a, b, c) {
    a = isNaN(a) ? 1 : a // Se não for um número pega o valor padrão
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}
// console.log(soma4(), soma4(3), soma4(1, 2, 3))
// console.log(soma4(0, 0 ,0))

// Valor padrão do ES2015
function somaES(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(somaES(), somaES(3), somaES(1, 2, 3))
console.log(somaES(0, 0 ,0))
