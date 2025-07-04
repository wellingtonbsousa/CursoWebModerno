const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // Antes do ES15
const obj2 = {a, b, c}  // Agora assume o nome da constante como nome do atributo.
                        // Se precisar mudar o nome, adotar o modo anterior
console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)
// ou
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    // Forma anterior
    funcao1: function() {
        //...
    },
    // Forma Atual
    funcao2() {
        //...
    }
}
console.log(obj5)