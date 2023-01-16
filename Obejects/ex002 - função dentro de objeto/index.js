//Meu objeto
let pessoa = {
    digaOi: function(name) {
        return `Olá ${name}`
    }
}

// Ou dessa forma:
let pessoa2 = {
    digaOi(name) {
        return `Olá ${name}`
    }
}

//chamando a função dentro do meu objeto
console.log(pessoa.digaOi('Vinicius'))

console.log(pessoa2.digaOi('Pedrinho'))
