console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
// ou
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Adicionando elemento. Forma mais usada para substituir
aprovados.push('Abia') // Mais usual para adicionar elementos
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null) // Existe o elemento, porem undefined

aprovados.sort() // Altera o array. Não só apresenta
console.log(aprovados)

delete aprovados[1] // Retira o valor e deixa como undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
// splice serva para excluir e/ou incluir elementos
aprovados.splice(1, 1) // Exclui um elemento a partir do indice 1
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)
