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
 const usuario = {
     nome: 'Brenno',
     idade: 38,
     empresa: 'BCL-ST'
 };

 const {nome, ...resto } = usuario;

 console.log("Nome: "+nome);
 console.log(resto);

 const arr = [1,2,3,4];

 const [a,b, ...c] = arr;
 console.log(a);
 console.log(b);
 console.log(c);


 function soma(...params){
     return params.reduce((total, next) => total + next);
 }
 console.log('A soma é: '+ soma(1,3,4,2,10,100));

 //SPREAD (repassa informações de um objeto ou array pra outra estrutura dedados)
 const arr1 = [1,2,3];
 const arr2 = [4,5,6];
 const arr3 = [...arr1, ...arr2];
 console.log(arr3);

 const usuario1 = {
     nome: 'Brenno',
     idade: 38,
     empresa: 'BCL-ST'
 };
 console.log(usuario1);
 const usuario2 = {...usuario1, nome: 'Amanda', idade: 21, endereco:'Jardim Brasil 2'};
 console.log(usuario2);
