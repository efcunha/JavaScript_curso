const notas = [3.6, 6.7, 7.4, 9.8, 8.1, 7.7, 6.5, 9.2]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Mais limpa
const notasMenorQue7 = nota => nota < 7 
const notaBaixas3 = notas.filter(notasMenorQue7)
console.log(notaBaixas3)
