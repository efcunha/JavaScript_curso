function tratarErroELancar(erro) { // recebe um erro como parâmetro
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw { // lançar um objeto
    nome: erro.name, // nome do erro
    msg: erro.message, // mensagem do erro
    date: new Date // data do erro
  }
}

function imprimirNome(obj) { // recebe um objeto como parâmetro
  try { // tenta executar o bloco de código abaixo
    console.log(obj.name.toUpperCase() + '!!!'); // obj.name pode dar erro
  } catch (e) { // capturar o erro
    tratarErroELancar(e); // lançar o erro para fora da função
  } finally { // sempre será executado
    console.log('final'); // sempre será executado
  }
}

const obj = { name: 'Roberto' }; // obj.name pode dar erro
imprimirNome(obj); 
