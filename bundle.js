"use strict";

var usuario = {
  nome: 'Brenno',
  idade: 38,
  endereco: {
    cidade: 'Olinda',
    estado: 'PE'
  }
};
console.log(usuario); //desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      estado = _ref.endereco.estado;
  console.log(nome, idade, estado);
}

mostraNome(usuario);
