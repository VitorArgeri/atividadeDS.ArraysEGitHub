//Método 01: .concat().
//O método .concat() mistura dois ou mais arrays.

//Const: Usado para criar variáveis que não serão reatríbuidas, ou seja, uma variável imutável.

//Defino um array com as seguintes strings: 'a', 'b', 'c'.
const arrayA = ['a', 'b', 'c'];
//Exibo a arrayA.
console.log(arrayA);
//Defino um array com os seguintes números: 1, 2, 3.
const arrayB = [1, 2, 3];
//Exibo a arrayB.
console.log(arrayB);
//Defino uma array como a mistura entre a arrayA e a arrayB com o .concat().
const arrayC = arrayA.concat(arrayB);
//Exibo a arrayC.
console.log(arrayC);

//Exibo um espaço em branco para separar os dois exemplos.
console.log("");

//Defino um array com as seguintes strings:'Pulmão', 'Coração', 'Rim'.
const arrayD = ['Pulmão', 'Coração', 'Rim'];
//Exibo a arrayD.
console.log(arrayD);
//Defino um array com as seguintes strings: 'Pulmão', 'Coração', 'Rim'.
const arrayE = ['Estômago', 'Instestino'];
//Exibo a arrayE.
console.log(arrayE);
//Defino uma array como a mistura entre a arrayD e a arrayE com o .concat().
const arrayF = arrayD.concat(arrayE);
//Exibo a arrayF.
console.log(arrayF);

