let pessoa = {
    nome: 'vinicius',
    idade: 27,
    linguagem: 'javaScript',
}

let outrosDados = {
    cor: 'branco',
    gatos: 5,
    mouse: 'g pro wireless',
}

// Para juntar os 2 em uma variavel nova ficaria:
let novoUsuario = Object.assign({}, pessoa, outrosDados)

// Se quiser juntar os 2 mas não em uma nova variavel ficaria:
Object.assign(pessoa, outrosDados)





console.log(novoUsuario)