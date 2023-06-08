class Carro {
    constructor(cor, modelo) {
        this.color = cor
        this.modelo = modelo
        console.log(`Olá, eu sou um novo carro! Minha cor é ${this.color}, e meu modelo é ${this.modelo}`)
    }
}

let c1 = new Carro("azul", "mustang")
let c2 = new Carro("azul", "fusca")
let c3 = new Carro("preto", "mustang")
let c4 = new Carro("preto", "fusca")
