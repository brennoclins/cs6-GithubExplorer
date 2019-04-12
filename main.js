const arr = [1, 3, 4, 5, 6];

//arrow function
//função anonima
const newArr = arr.map(item => item + 2);

console.log(newArr);

const teste = () => [1, 2, 3];
console.log(teste());
//para retornar um objeto temos que colocar o objeto entre parenteses "("{nome: 'Brenno'} ")"
const retornaobjeto = () => ({nome: 'Brenno'});
console.log(retornaobjeto());