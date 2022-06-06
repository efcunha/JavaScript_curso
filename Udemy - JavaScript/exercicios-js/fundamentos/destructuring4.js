function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se min for maior que max, troca os valores
    const valor = Math.random() * (max - min) + min // calcula o valor aleatório
    return Math.floor(valor) // arredonda o valor para baixo
}

console.log(rand([50, 40])) // 50
console.log(rand([992])) // 992
console.log(rand([, 10])) // 10
console.log(rand([])) // 0
//console.log(rand()) // undefined isto da erro
