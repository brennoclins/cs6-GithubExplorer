"use strict";

//mutação em constantes

/**
 * Mutação em uma constante ocorre quando mantemos a mesma estrutura e so mudamos o dado dentro dela
 */
var usuario = {
  nome: 'Brenno'
};
usuario.nome = 'Dev Kvera';
console.log(usuario.nome);
