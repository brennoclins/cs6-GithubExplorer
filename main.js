//valor padrao
function soma(a = 3, b = 6){
    return a + b;
}
console.log(soma(1));
console.log(soma());

//com ARROW FUNCTIONS
const soma2 = (a = 3, b = 6) => a + b;

console.log(soma2(2));
console.log(soma2());