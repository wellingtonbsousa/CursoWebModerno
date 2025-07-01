// Function Declaration
console.log(soma(3, 4))
function soma(x, y) { // Vantagem de se poder chamar a funcao antes de criar a mesma
    return x + y
}

// Function Expression (Declara a funcão à uma variavel) (Função anônima)
const sub =  function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// Named Function Expression (Declara a funcão à uma variavel)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

