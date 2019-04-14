/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction sub(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/*\r\nclass List{\r\n    constructor(){\r\n        this.data = [];\r\n    }\r\n\r\n    add(data){\r\n        this.data.push(data);\r\n        console.log(this.data);\r\n    }\r\n}\r\n\r\nclass TodoList extends List{\r\n    constructor(){\r\n        super();\r\n\r\n        this.usuario = 'Brenno';\r\n    }\r\n\r\n    mostraUsuario(){\r\n        console.log(this.usuario);\r\n    }\r\n}\r\n\r\nconst MinhaLista = new TodoList();\r\n\r\ndocument.getElementById('novotodo').onclick = function(){\r\n    MinhaLista.add('brenno');\r\n}\r\n\r\nMinhaLista.mostraUsuario();\r\n\r\n//metodos estaticos  não reconhece o resto da classe\r\n//servem apenas pra resolver algo e trazer uma resposta\r\nclass ExMetodosStaticos{\r\n    static soma(a, b){\r\n        return a+b;\r\n    }\r\n}\r\n\r\nconsole.log(ExMetodosStaticos.soma(1,2));\r\n*/\n\n/**\r\n * Desestruturação de dados com javascript\r\n */\n\n/*\r\nconst usuario = {\r\n    nome: 'Brenno',\r\n    idade: 38,\r\n    endereco: {\r\n        cidade: 'Olinda',\r\n        estado: 'PE',\r\n    },\r\n};\r\n\r\nconsole.log(usuario)\r\n\r\n//desestruturação\r\nconst { nome, idade, endereco:{cidade} } = usuario;\r\nconsole.log(nome);\r\nconsole.log(idade);\r\nconsole.log(cidade);\r\n\r\n\r\nfunction mostraNome({nome, idade, endereco:{estado}}){\r\n    console.log(nome, idade, estado)\r\n}\r\nmostraNome(usuario);\r\n*/\n\n/**\r\n * Opera dores Rest e Spread\r\n */\n\n/*\r\n //REST (pega o resto das propriedades de algo)\r\n const usuario = {\r\n     nome: 'Brenno',\r\n     idade: 38,\r\n     empresa: 'BCL-ST'\r\n };\r\n\r\n const {nome, ...resto } = usuario;\r\n\r\n console.log(\"Nome: \"+nome);\r\n console.log(resto);\r\n\r\n const arr = [1,2,3,4];\r\n\r\n const [a,b, ...c] = arr;\r\n console.log(a);\r\n console.log(b);\r\n console.log(c);\r\n\r\n\r\n function soma(...params){\r\n     return params.reduce((total, next) => total + next);\r\n }\r\n console.log('A soma é: '+ soma(1,3,4,2,10,100));\r\n\r\n //SPREAD (repassa informações de um objeto ou array pra outra estrutura dedados)\r\n const arr1 = [1,2,3];\r\n const arr2 = [4,5,6];\r\n const arr3 = [...arr1, ...arr2];\r\n console.log(arr3);\r\n\r\n const usuario1 = {\r\n     nome: 'Brenno',\r\n     idade: 38,\r\n     empresa: 'BCL-ST'\r\n };\r\n console.log(usuario1);\r\n const usuario2 = {...usuario1, nome: 'Amanda', idade: 21, endereco:'Jardim Brasil 2'};\r\n console.log(usuario2);\r\n*/\n\n/**\r\n * Template literals\r\n */\n\n/*\r\nconst nome = 'Brenno';\r\nconst idade = 38;\r\n\r\nconsole.log('Meu nome é ' + nome + \" e tenho idade: \" + idade) + ' anos';\r\n//com template literals\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos!!`);\r\n*/\n\n/**\r\n * Object short syntax\r\n */\n\n/*\r\nconst nome = 'Brenno';\r\nconst idade = 38;\r\n\r\nconst usuario = {\r\n    nome,idade, empresa: 'BCL-ST'\r\n};\r\nconsole.log(usuario);\r\n*/\n\n/**\r\n * Testando webpack\r\n */\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"](1, 2));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"](3, 1));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });