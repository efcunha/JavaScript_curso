// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

function comparaNumeros(num1, num2) {
  if (num1 === num2) {
    return `Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, que é ${num1 + num2 > 10 ? "maior" : "menor"} que 10 e ${num1 + num2 <= 20 ? "menor" : "maior" } do que 20.`;
  } else if (num1 + num2 > 10 && num1 + num2 < 20) {
    return `Sua soma é ${num1 + num2}, que é maior que 10 e menor que 20.`;
  } else {
    return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, que é ${num1 + num2 > 10 ? "maior" : "menor"} que 10 e ${num1 + num2 < 20 ? "menor" : "maior"} que 20.`;
  }
}

console.log(comparaNumeros(10, 10));
console.log(comparaNumeros(10, 20));
console.log(comparaNumeros(10, 5));