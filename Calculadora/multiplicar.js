const multiplicar = (num1, num2) => num1 * num2
console.log(`Função multiplicar recebendo 10 e 2 retorna: ${multiplicar(10,2)}`)
console.log(`Função multiplicar recebendo 10 e 0 retorna: ${multiplicar(10,0)}`)
console.log(`Função multiplicar recebendo 0 e 10 retorna: ${multiplicar(0,10)}`)
console.log(`Função multiplicar recebendo 0 e 0 retorna: ${multiplicar(0,0)}`)

module.exports = multiplicar