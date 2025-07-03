// Normalmente
const prod1 = {
    nome: 'nome1',
    preco: 45
}

const prod2 = {
    nome: 'nome2',
    preco: 1234
}

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())