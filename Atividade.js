//Método 08: .every().
//Verifica se todos os elementos presentes em uma array passam por uma determinada condição.

//Defino uma array com os valores 18, 20, 25, 30, 55.
let idade = [18, 20, 25, 30, 55];
//Defino a variável verificação como a vericação de que se todos os elementos presentes na array são maiores ou iguais à 18.
let verificação = idade.every(idade => idade >= 18);
//Exibo a variável verificação.
console.log(verificação);
//A resposta será true.

//Exibo um espaço em branco para separar os exemplos.
console.log("");

//Defino uma array com os valores 40, 7, 8, 57, 3.
let mnidade = [2, 3, 4, 5, 18];
//Defino uma variável verificação2 omo a verifcação de que todos elementos presentes na array são menores do que 18.
let verificação2 = mnidade.every(mnidade => mnidade < 18);
//Exibo a variável verificação2.
console.log(verificação2);
//A resposta será false.