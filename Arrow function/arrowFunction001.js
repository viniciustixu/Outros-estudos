//normal
function somar(n1, n2) {
    return n1 + n2
}

console.log(somar(3,2))



//arrow function
somar2 = (n1,n2) => {return n1 + n2}

console.log(somar2(4,4))



//Se for só um parametro
nome = n => {return n}

console.log(nome('Vinicius'))



//Da pra abreviar dessa forma
add = n => n+10                                // add é uma função que recebe o parametro N e retorna parametro + 10

console.log(add(5))



//Outros exemplos
nomeDoGato = n => n

console.log(nomeDoGato('Jupter'))
