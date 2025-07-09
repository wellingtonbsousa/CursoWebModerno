const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Insere um elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode remover e inserir elementos
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
// Remover
pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Cria um Novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Novo array do indice 1 ao 3 ( 4 nao entra )
console.log(algunsPilotos2)