// Pessoa -> aponta para um endereço de memória (ex: 123)
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) // Não permite excluir atributos, alterar, adicionar
pessoa.nome = 'Maria'
console.log(pessoa)
