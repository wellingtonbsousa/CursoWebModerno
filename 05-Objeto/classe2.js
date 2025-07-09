class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Diz que a classe pai tem como pai (prototype) a classe avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }

}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho

console.log(filho)