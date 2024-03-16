//Método 05: includes().
//O método includes() verifica se um elemento está presente ou não na array.

//Const: Usado para criar variáveis que não serão reatríbuidas, ou seja, uma variável imutável.

//Defino uma array com os valores 10, 20 e 30.
const array1 = [10, 20, 30];
//Verifico se a array possui o elemento "30" utilizando do .includes(30).
console.log(array1.includes(30));
//A resposta será "true".

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Defino uma array com os valores 100, 200 e 300.
const array2 = [100, 200, 300];
//Verifico se a array possui o elemento "500" utilizando do .includes(500).
console.log(array2.includes(500));
//A resposta será "false".
