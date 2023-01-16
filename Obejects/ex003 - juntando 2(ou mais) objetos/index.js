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


// Se quiser juntar os 2 valores em 'pessoa' ficaria: (Evitar usar esse de acordo com o professor)
Object.assign(pessoa, outrosDados)


//Também há uma terceira opção:
let novoUsuario2 = {
    ...pessoa,          // (...) Isso se chama spread, ele imprime os valores que estão dentro do objeto
    ...outrosDados,     // Em vez de ficar novoUsuario2.pessoa.nome, vou poder usar apenas novoUsuario2.nome
    
    ...{
        refri: 'coca cola',   // Este exemplo já está gerando valores novos dentro do objeto novoUsuario2
        cafe: 'padre vitor',
    }
    
/*  Ou eu poderia simplesmente abreviar da seguinte maneira:
    headset: 'G pro X',  
    teclado: 'blackWidow',
*/
}






console.log(novoUsuario2)