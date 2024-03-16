//Método 06: some().
//O método some(). verifica se pelo menos um elemento presente na array passa em um teste especificado.

//Defino uma array com os elementos 1, 2, 3, 4 e 6.
let array1 = [1, 2, 3, 4];
//Defino uma variável como a verificação de que se algum elemento dentro da primeira array é maior ou igual a 4
let array2 = array1.some(array1 => array1 >= 4);
//Exibo a verificação presente na array2.
console.log(array2);
//A reposta será true

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Defino uma array com os elementos 1, 2, 3, 4 e 5.
let array3 = [1, 2, 3, 4, 5];
//Defino uma variável com a verificação de que se algum elemento dentro da primeira array é maior ou igual a 6.
let array4 = array3.some(array3 => array3 >= 6);
//Exibo a verificação presente na array4.
console.log(array4);
//A resposta será false.