require('./global')     // Sem ser uma variavel. Só se chama uma unica vez. 
                        // Não é necessario em outros arquivos

console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // Permite mudar o conteudo. Solução: freeze no Objeto
