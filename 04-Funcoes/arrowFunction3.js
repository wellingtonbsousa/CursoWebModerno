let comparaComThis =  function(param) {
    console.log(this === param)
}
//comparaComThis(global) // No Node. Para o Browser o global é o window

const obj = {}
//comparaComThis = comparaComThis.bind(obj)
//comparaComThis(global)
//comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow()  /* Não aponta para o global, pois foi escrita dentro de um módulo. 
                          Já na function normal aponta para o global */
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false pois o arrow function prevalece e não deixa o bind interferir
