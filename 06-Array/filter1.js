const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// console.log(produtos.filter(function(p) {
    // return true // Retorna todos os elementos do array original
    // return false // Não retorna nenhum elemento
// }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // true

console.log(produtos.filter(caro).filter(fragil))