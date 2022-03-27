const somar = require('./somar')
const subtrair = require('./subtrair')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

console.log(`Função somar recebendo 1 e 2 retorna: ${somar(1,2)}`)

console.log(`Função subtrair recebendo 10 e 2 retorna: ${subtrair(10,2)}`)

console.log(`Função multiplicar recebendo 10 e 2 retorna: ${multiplicar(10,2)}`)
console.log(`Função multiplicar recebendo 10 e 0 retorna: ${multiplicar(10,0)}`)
console.log(`Função multiplicar recebendo 0 e 10 retorna: ${multiplicar(0,10)}`)
console.log(`Função multiplicar recebendo 0 e 0 retorna: ${multiplicar(0,0)}`)

console.log(`Função dividir recebendo 10 e 2 retorna: ${dividir(10,2)}`)
console.log(`Função dividir recebendo 0 e 10 retorna: ${dividir(0,10)}`)