"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Brenno';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('brenno');
}

MinhaLista.mostraUsuario();

//metodos estaticos  não reconhece o resto da classe
//servem apenas pra resolver algo e trazer uma resposta
class ExMetodosStaticos{
    static soma(a, b){
        return a+b;
    }
}

console.log(ExMetodosStaticos.soma(1,2));
*/

/**
 * Desestruturação de dados com javascript
 */

/*
const usuario = {
    nome: 'Brenno',
    idade: 38,
    endereco: {
        cidade: 'Olinda',
        estado: 'PE',
    },
};

console.log(usuario)

//desestruturação
const { nome, idade, endereco:{cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome({nome, idade, endereco:{estado}}){
    console.log(nome, idade, estado)
}
mostraNome(usuario);
*/

/**
 * Opera dores Rest e Spread
 */
//REST (pega o resto das propriedades de algo)
var usuario = {
  nome: 'Brenno',
  idade: 38,
  empresa: 'BCL-ST'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log("Nome: " + nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log('A soma é: ' + soma(1, 3, 4, 2, 10, 100)); //SPREAD (repassa informações de um objeto ou array pra outra estrutura dedados)

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: 'Brenno',
  idade: 38,
  empresa: 'BCL-ST'
};
console.log(usuario1);

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Amanda',
  idade: 21,
  endereco: 'Jardim Brasil 2'
});

console.log(usuario2);
