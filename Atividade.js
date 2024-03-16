//Método 11: .splice().
//.splice() é um método que permite você adicionar, remover ou substituir elementos em um array.

//Defino a array com as strings 'a', 'b' e 'c'.
let array = ['a', 'b', 'c'];
//Exibo array.
console.log(array);

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Utilizamos o método .splice() para adicionar um elemento.
//Primeiramente dito que quero adiciona-lo na posição 1.
//Segundamente dito que não quero remover nenhum elemento.
//Terceiramente indico quais elementos quero adicionar.
array.splice(1, 0, 'x', 'y');
//Exibo o array depois da mudança.
console.log(array); 

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Utilizamos o método .splice() para substituir um elemento.
//Primeiramente dito que quero começar pela posição 2 do array.
//Segundamente falo que quero remover 2 elementos.
//Terceiramente dito o que quero adicionar.
array.splice(1, 2, 'q');
//Exibo o array depois da mudança.
console.log(array);

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Utilizamos o método .splice() para remover os elementos.
//Primeiramente indico que quero começar pela posição 1.
//Segundamente indico quantos elementos quero remover.
array.splice(1, 1);
//Exibo o array depois da mudança.
console.log(array);
