// recebendo os ID's
let resultado = document.getElementById('res')

// meu objeto
let usuario = {
     nome: document.getElementById('nome'),
     idade: document.getElementById('idade'),
     linguagem: document.getElementById('linguagem'),
}


function nomeDigitado() {
    resultado.innerHTML = usuario.nome.value
}

function idadeDigitada() {
    resultado.innerHTML = usuario.idade.value
}

function linguagemDigitada() {
    resultado.innerHTML = usuario.linguagem.value
}
