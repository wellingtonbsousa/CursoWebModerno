const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => { // Percorre o objeto imprimindo os elemantos
    console.log(`${e[0]}: ${e[1]}`)
})
// ou
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // permite imprimir a variavel. Se for false não aparecerá (enumerar)
    writable: false,  // não permite alterar o valor
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(pessoa)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) 
// O primeiro é o que recebe os demais
// O a de dest será substituido pelo a de o2 (mesmo nome)
console.log(obj)

Object.freeze(obj) // Congela o objeto. Portanto não é alterado
obj.c = 1234
console.log(obj)