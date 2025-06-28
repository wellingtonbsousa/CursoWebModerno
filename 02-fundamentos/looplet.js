for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) // Dará erro pois o i está declarado só para o loop (let)
                      // Var não tem escopo de bloco e Let tem