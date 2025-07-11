// Objeto é uma Coleção Dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
console.log(carro.proprietario.endereco)

delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.calcularValorSeguro)