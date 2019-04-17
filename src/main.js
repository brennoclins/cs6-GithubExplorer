import api from './api';

class App {
    constructor() {
        //arrei pra guardar a lista
        this.repositories = []

        this.formEl = document.getElementById("repo-from");
        //pegando no html um input com "name=repository"
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');
        
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    //criando uma mensagem de loading
    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading');
            //adicionando o novo elemento no form
            this.formEl.appendChild(loadingEl)
        } else {
            // se não for LOADING remove o elemento da tela
            document.getElementById('loading').remove();
        }
    }
    //transformando o metodo em assicrono com "async"
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if (repoInput.length === 0)
            return;
        
        //colocando para aparecer na tela o loading
        this.setLoading();

        //controle de erros com TRY CATCH
        try{
            const response = await api.get(`/repos/${repoInput}`);
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            //linpando o campo input
            this.inputEl.value = '';

            //renderizando a tela
            this.render();
        } catch (err) {
            alert('O repositório não existe');
        }

        //retirando a informação do loading da tela
        this.setLoading(false);
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
            linkEl.setAttribute('href', repo.html_url);
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