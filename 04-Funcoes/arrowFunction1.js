// Function
let dobro = function (a) {
    return 2 * a
}
// Arrow Function => Vantagem de ter um this constante (não muda nunca)
//                   Sempre deve ser utilizada em uma variável
dobro = (a) => {
    return 2 * a
}
// Arrow Function com return implícito
dobro = a => 2 * a
// console.log(dobro(Math.PI))

// Arrow Function sem parametros
let ola = function () {
    return 'Olá'
}
ola = () => 'Olá'
// ou
ola = _ => 'Olá'
console.log(ola())

