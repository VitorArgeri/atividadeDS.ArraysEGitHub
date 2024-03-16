//Método 10: .map().
//O método .map() cria uma nova array com os resultados de uma função aplicada sobre cada um dos elementos presentes na array original.

//Define uma array com os valores 1, 4, 9, 16 e 25.
let numeros = [1, 4, 9, 16, 25];
//Define "exibidor" como o resultado da função nos elementos presentes na array "numeros"
let exibidor = numeros.map(numeros => numeros * 2);
//Exibe o exibidor.
console.log(exibidor);

//Exibe um espaço em branco para separar os dois exemplos.
console.log("");

//Define uma array com os elementos 6, 7, 8, 9 e 10.
let numeros2 = [6, 7, 8, 9, 10];
//Define "exibidor2" como o resultado da função nos elementos presentes na array "numeros2"
let exibidor2 = numeros2.map(numeros2 => numeros2 * numeros2);
//Exibe o exibidor2.
console.log(exibidor2);
