const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Vazio pois não existe
console.log(escola.charCodeAt(3)) // Codigo ASCII
console.log(escola.substring(1)) // A partir do indice 1
console.log(escola.substring(0, 3)) // do 0 ao 2 (não inclui o 3)
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log('Ana, Maria, José'.split(','))
