const dividir = (num1, num2) => num2 === 0 ? "Não se pode dividir por zero" : num1 * num2
/**
 * NOTA DE ESCLARECIMENTO 
 * O exercício pede para retornarmos "Não se pode dividir por zero" caso qualquer um dos dois números seja 0.
 * No entanto, não se pode dividir um número por 0, mas é possível dividir 0 por qualquer número (que não seja 0).
 */
console.log(`Função dividir recebendo 10 e 0 retorna: ${dividir(10,0)}`)
console.log(`Função dividir recebendo 0 e 0 retorna: ${dividir(0,0)}`)

module.exports = dividir