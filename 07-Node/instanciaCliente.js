const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Invocando a função factory que cria uma instancia
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // Faz o cache. Mantem a mesma instancia

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Foram criadas novas instancias pelo factory
