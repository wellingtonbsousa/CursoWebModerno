// Criando a funcao forEach2 para o Array
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // conteudo, indice e o array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { 
    // indice sempre passado como segundo parametro
    // sequencia: nome, indice, array - só esses 3, se passar mais: undefined
    console.log(`${indice + 1}) - ${nome}`)
})
