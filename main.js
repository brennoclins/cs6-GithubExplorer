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