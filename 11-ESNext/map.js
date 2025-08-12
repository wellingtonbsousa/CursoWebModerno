const tecnologias = new Map()
tecnologias.set('React', { framework: false})
tecnologias.set('Angular', { framework: true})

console.log(tecnologias.React)
console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // verifica se 124 está no map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // chave nao aceita repeticao
chavesVariadas.set(456, 'b') // valor aceita repeticao

console.log(chavesVariadas)