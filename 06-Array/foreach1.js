const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { 
    // indice sempre passado como segundo parametro
    // sequencia: nome, indice, array - só esses 3, se passar mais: undefined
    console.log(`${indice + 1}) - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)