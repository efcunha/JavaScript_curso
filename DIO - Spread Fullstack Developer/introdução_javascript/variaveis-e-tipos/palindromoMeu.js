// Check, in two different ways, if a String is a palindrome.

// solução 1
function verificaPalindromo(string) {
  if (!string) return;
  console.log(string === string.split("").reverse().join(""));
}
verificaPalindromo("cat");
//verificaPalindromo("ovo");

// solução 2
// asa
// 012
// abba
// 0123

function verificaPalindromo2(string) {
  if (!string) return;
  if (!string.length) return;

  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return console.log(false);
    }
  }
  return console.log(true);
}
verificaPalindromo2("asa");
//verificaPalindromo2("ovo");
//verificaPalindromo2("cat");
