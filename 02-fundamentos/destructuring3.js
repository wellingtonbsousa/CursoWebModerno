// Destructuring - Novo Recurso do ES2015
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
// ou
console.log(rand({ max: 50, min: 40 }))

console.log(rand({})) // vai de 0 a 999

console.log(rand()) // Erro