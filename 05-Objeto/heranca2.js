// Cadeia de Prototipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // atribui avo como pai de pai
const filho = { __proto__: pai, attr3: 'C' } // Shadowing -> sombreia o attr3 do pai
console.log(filho.attr1)
console.log(pai.attr1)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h e ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Pega os atributos somente de Ferrari
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(400)
console.log(ferrari.status())


