/*
const input = document.getElementById("input") as HTMLInputElement;
input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});
*/

// Generic Types
/*
function adicionaApendiceAlista(array, valor) {
  return array.map((item) => item + valor);
}
adicionaApendiceAlista([1, 2, 3], 1);
*/
/*
interface IUsuario {
  id: string;
  enail: string;
}
interface IAdmin extends IUsuario {
  cargo: "gerente" | "coordenador" | "supervisor";
}

function redirectione(usuario: IUsuario | IAdmin) {
  if ("cargo" in usuario) {
    // redirecionar para a area de administração    
  }
  // redirecionar para area do usuario
}
*/
/*
interface IUsuario {
  id: string;
  enail: string;
  cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
}

function redirectione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo);
  }
  // redirecionar para area do usuario
}
*/

/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
};

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    construction(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14)
*/

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova funcao");
  },
});

$("body").novaFuncao();
