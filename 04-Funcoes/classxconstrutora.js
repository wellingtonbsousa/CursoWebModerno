class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar() // Não funciona no Browser por causa do this

// Função Construtora
function criarPessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new criarPessoa('João')
p2.falar()