// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.keys(obj)) // Já existia na Versão antiga do ES
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,   // antes: nome: nome
    ola() { // antes: ola: function()
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())