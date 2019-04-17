
class App {
    constructor() {
        //arrei pra guardar a lista
        this.repositories = []

        this.formEl = document.getElementById("repo-from");
        
        this.listEl = document.getElementById('repo-list');
        
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'curso-javascript-do-zero',
            description: 'Código reproduzido durante o curso de Javascript do zero',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v-4',
            html_url: 'https://github.com/Rocketseat/curso-javascript-do-zero',
        });

        this.render();
    }

    render() {
        //limpa toda a lista
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            //atributo do bootstrap
            imgEl.setAttribute('class', 'img-thumbnail col-4');

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.setAttribute('class', 'list-group-item list-group-item-action');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });

    }
}

new App();

/*
import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.warn(err);
        }
    }
}

Api.getUserInfo('diego3')
*/