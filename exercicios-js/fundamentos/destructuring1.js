// novo recurso de ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // desestruturação de objetos tirar nome idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // desestruturação de objetos renomear nome idade
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // desestruturação de objetos com valores padrão
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // desestruturação de objetos dentro de objetos endereço
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa // desestruturação de objetos dentro de objetos dentro de objetos
//console.log(ag, num)
