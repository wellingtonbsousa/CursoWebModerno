// Object.preventExtensions -> Não permite adicionar novos atributos. Pertite excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> Selar: Não permite excluir ou incluir novos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> Selado com valores constantes
 