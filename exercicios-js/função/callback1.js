const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
//fabricantes.forEach(fabricante => console.log(fabricante));
//fabricantes.forEach((fabricante, indice) => console.log(fabricante, indice));
//fabricantes.forEach((fabricante, indice, array) => console.log(fabricante, indice, array));
//fabricantes.forEach(fabricante => console.log(fabricante));
