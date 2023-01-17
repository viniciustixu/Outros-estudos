// Imprimir todos os numeros de 1 a 100
// se o numero for divisível por 3 imprimir Buzz
// Se o numero For divisível por 5 imprimir Feed
// Se o numero for divisível por 3 e 5 imprimir BuzzFeed

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('BuzzFeed')
    } else if (i % 3 == 0) {
        console.log('Buzz')
    } else if (i % 5 == 0) {
        console.log('Feed')
    } else {
        console.log(i)
    }
}
