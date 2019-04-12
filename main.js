
class List {
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
        //chama o construtor da classe pai
        super();

        this.usuario = 'Brenno';
    }

    //metodo da classe
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();


document.getElementById('novotodo').onclick = function(){
    MinhaLista.add("Novo Todo");
}

MinhaLista.mostraUsuario();


class Matematica {
    //metodo estatico da classe matematica
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(10, 32));