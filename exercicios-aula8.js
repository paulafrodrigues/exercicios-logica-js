// 6. Faça um programa que leia 5 números e informe o maior número.
let arr = [15, 2, 47, 88, 31];
let max = 0;

for (let i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
      max = arr[i];
   }

}
console.log(max);

//7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

let arr = [8, 5, 43, 97, 15];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
}

// 8. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

Lojas Quase Dois - Tabela de preços

1 - R$ 1.99

2 - R$ 3.98

...

50 - R$ 99.50

for( let i = 1; i <= 50; i++){
   console.log(i + ' - R$ ' + (i * 1.99)); 
}
   
//   9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

numeros primos só tem 2 divisores;
numeros não primos tem mais de 2 divisores;
o ultimo é o próprio divisor

let numero = 14;
let divisores = 0;

for(let i = 1; i<= numero; i++){
   if(numero % i === 0){
      divisores++
   }
}

if(divisores === 2){
   console.log(numero + ' é primo');


//   10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. 
// a sequencia é a soma do numero anterior com o próximo
// a sequencia vai sempre começar com 0, 1, então, o 3 número é sempre 1 + 0 = 1


//   Nem tanto
//   11. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:

//   Lojas Tabajara

//   Produto 1: R$ 2.20

//   Produto 2: R$ 5.80

//   Produto 3: R$ 0

//   Total: R$ 9.00

//   Dinheiro: R$ 20.00

//   Troco: R$ 11.00

//   12. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

//   13. Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados (um array) alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada. As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:

//   Resultado final:

//   Atleta: Aparecido Parente

//   Melhor nota: 9.9

//   Pior nota: 7.5

//   Média: 9.04
