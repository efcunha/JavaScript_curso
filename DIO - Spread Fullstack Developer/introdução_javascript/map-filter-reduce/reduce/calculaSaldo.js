function calculaSaldo(saldo, itens) {
  if (!saldo || !itens || !itens.length) return "Envie todos os parâmetros";

  const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

  return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
  {
    preco: 2,
    nome: "maçã",
  },
  {
    preco: 30,
    nome: "roupa",
  },
  {
    preco: 25,
    nome: "carne",
  },
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));

// Meu

function calculaSaldoMeu(saldo, itens) {
  if (!saldo || !itens || !itens.length) return "Envie todos os parâmetros";
  let saldoFinal = saldo;
  for (let i = 0; i < itens.length; i++) {
    saldoFinal -= itens[i].preco;
  }

  return `O saldo final será de ${saldoFinal} reais`;
}

const items = [
  {
    preco: 2,
    nome: "maçã",
  },
  {
    preco: 30,
    nome: "roupa",
  },
  {
    preco: 25,
    nome: "carne",
  },
];

saldo = 150;

console.log(calculaSaldoMeu(saldo, items));
