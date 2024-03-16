//Método 02: .join()
//O método .join() pega todos os elementos de um array e separa eles por um parâmetro definido.

//Const: Usado para criar variáveis que não serão reatríbuidas, ou seja, uma variável imutável.

//Defino uma array com os números 10, 20 e 30.
const arrayA = [10, 20, 30];
//Uso do método .join() para separar os elementos da arrayA com o parâmetro *.
const arrayB = arrayA.join("*");
//Exibo a arrayA.
console.log(arrayA);
//Exibo a arrayB.
console.log(arrayB);

//Exibo um espaço em branco para separar os dois exemplos.
console.log("")

//Defino uma array com as strings 'Aves', 'Mamíferos' e 'Répteis.
const arrayC = ['Aves', 'Mamíferos', 'Répteis'];
//Uso do método .join() para separar os elementos da arrayC com o parâmetro _.
const arrayD = arrayC.join("_");
//Exibo a arrayC.
console.log(arrayC);
//Exibo a arrayD.
console.log(arrayD);


