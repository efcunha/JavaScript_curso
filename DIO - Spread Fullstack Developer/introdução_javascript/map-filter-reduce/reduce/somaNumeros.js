function somaNumeros(arr) {
  if (!arr || !arr.length) return;
  const soma = arr.reduce((prev, curr) => prev + curr);
  return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

// Meu
function somaNumerosMeu(arr) {
  if (!arr || !arr.length) return;
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log(somaNumerosMeu([1, 1, 1, 3]));
