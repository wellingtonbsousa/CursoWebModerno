console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1           // Será visivel fora do arquivo
exports.b = 2        // Será visivel fora do arquivo
module.exports.c = 3 // Será visivel fora do arquivo

console.log(module.exports)

exports = null
console.log(module.exports)
