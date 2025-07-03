// Usando notação literal
const obj1 = {}
console.log(obj1)

// Objects em JS
// console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // Fica visível para fora do objeto = pode ser alterado
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome, p1.getPrecoComDesconto())
p1.nome = 'Lapis'
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.nome, p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1.nome)
f1.nome = 'Raimundo'
console.log(f1.nome)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)