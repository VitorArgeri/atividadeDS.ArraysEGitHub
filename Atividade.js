//Método 09: filter().
//Cria uma nova array com todos os elementos que passaram por um determinado teste.

//Define a array com os valores 1, 2, 3, 4 e 5.
let numeros = [1, 2, 3, 4, 5];
//Define exibidor como a verificação de quais números atendem a condição.
let exibidor = numeros.filter(numeros => numeros >= 3);
//Exibe o exibidor,
console.log(exibidor);

//Exibe um espaço em branco para separar os dois exemplos.
console.log("");

//Define uma array coms os valores 10, 20, 30, 40 e 50.
let numeros2 = [10, 20, 30, 40, 50];
//Define exibidor2 como a verificação de quais números atendem a condição.
let exibidor2 = numeros2.filter(numeros2 => numeros2 <= 11);
//Exibe o exibidor2.
console.log(exibidor2);