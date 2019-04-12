"use strict";

var arr = [1, 3, 4, 5, 6]; //arrow function
//função anonima

var newArr = arr.map(function (item) {
  return item + 2;
});
console.log(newArr);

var teste = function teste() {
  return [1, 2, 3];
};

console.log(teste()); //para retornar um objeto temos que colocar o objeto entre parenteses "("{nome: 'Brenno'} ")"

var retornaobjeto = function retornaobjeto() {
  return {
    nome: 'Brenno'
  };
};

console.log(retornaobjeto());
