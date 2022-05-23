function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || significa ou
    const comprarTv50 = trabalho1 && trabalho2 // && significa e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor utlizando diferença !=
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // retorna um objeto
}

console.log(compras(true, true)) // {comprarSorvete: false, comprarTv50: false, comprarTv32: true, manterSaudavel: false}
console.log(compras(true, false)) // {comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true}
console.log(compras(false, true)) // {comprarSorvete: false, comprarTv50: false, comprarTv32: true, manterSaudavel: false}
console.log(compras(false, false)) // {comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true}


