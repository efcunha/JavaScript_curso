const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Cuidado !!! não deveria funcionar deveria voltar um erro.
imprimirResultado(6)
imprimirResultado(8.1)
imprimirResultado(6.5)
imprimirResultado(9)
