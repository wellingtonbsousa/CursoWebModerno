// let e const - let tem escopo de bloco / var não tem
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) // Causa erro, pois está fora do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)
console.log(`${produto}
é
caro!`) // Segue o mesmo que o escrito, o que não é possível com a string comum

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

//const [x, y] = [1, 2]
//console.log(x, y)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome, idade} = { nome: 'Ana', idade: 9}
console.log(nome, idade)
