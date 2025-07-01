function Pessoa() {
    this.idade = 0

    const selfZe = this // a partir daqui o this será sempre a function Pessoa
    setInterval(function() {
        selfZe.idade++
        console.log(selfZe.idade)
    }, 1000)
}
new Pessoa