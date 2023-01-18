let text = 'cinco'
let tamanho = text.length
let dividido = tamanho / 2
let dividido2 = Math.ceil(dividido) - 1


let c = text.slice(0, text.length - dividido2)
let f = c.slice(c.length - 1, c.length)




console.log(f)
