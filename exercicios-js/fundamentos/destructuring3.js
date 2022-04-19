function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min // calcula o valor aleatório
    return Math.floor(valor) // arredonda o valor para baixo
}

//console.log(rand({ min: 50, max: 40 })) // 50
const obj = { max: 50, min: 40 } // cria um objeto
console.log(rand(obj)) // 50
console.log(rand({ min: 955})) // 955
console.log(rand({})) // 0
//console.log(rand())
