class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Saque negado; saldo insuficiente!");
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class contaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this.cartaoCredito = cartaoCredito;
  }

  set cartaoCredito(valor) {
    this.cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this.cartaoCredito;
  }
}

class contaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class contaUniversitario extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada.";
    }

    this._saldo = this._saldo - valor;
  }
}
