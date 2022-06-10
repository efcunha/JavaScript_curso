// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");

let month = lines.shift();

let months = {
  1: "January",
  2: "February",

  //TODO: Complete os espaços em branco com uma possível solução para o desafio
};

print(months[month]);
