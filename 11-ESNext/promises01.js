let a = 1
console.log(a) // Imediato

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})

let pt = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

pt.then(valor => console.log(valor.x, valor.y))

let pr = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

pr
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))