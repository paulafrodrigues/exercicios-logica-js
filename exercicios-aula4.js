// /* 1. Crie um código que retorne a quantidade de pontos que seu time fez de 
// acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. 
// Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.) */

// function calcularPonto(resultado){
//   if(resultado === 'v'){
//     return '3 pontos';
//   }else if(resultado === 'e'){
//     return '1 ponto';
//   }else if(resultado === 'd'){
//     return '0 ponto';
//   }else {
//      return 'Resultado desconhecido';
//   }
// }

// console.log('Bora Bahia Minha Porra!!');
// console.log(calcularPonto('v'));
// console.log(calcularPonto('d'));
// console.log(calcularPonto('e'));

// /* refaça o código com switch */

// function calcularPontos(resultado){

// switch (resultado){
//   case 'V':
//     console.log('3 pontos');
//   break;
  
//   case 'E':
//     console.log(' 1 ponto');
//   break;
  
//   case 'D':
//     console.log('0 pontos');
//   break;
  
//   default:
//     console.log('Você não informou o resultado corretamente, diabo!')  
  
// }
//   }

// calcularPontos('V');
// calcularPontos('e');

/* 2. Palíndromos são palavras ou frases que podem ser lidas da esquerda para a 
direita ou da direita para a esquerda. Crie uma função que informe se uma 
palavra é uma palíndromo. */

// function informarPalindromo(palavra){
//   let resultado = palavra.split('').reverse().join('');
     
//   if(palavra === resultado){
//     return resultado + ' é um Palíndromo!'
//   } else{
//     return resultado + ' não é um Palíndromo! =('
//   }
// }

// console.log(informarPalindromo('dog'));
// console.log(informarPalindromo('ama'))

// /* 3. Faça uma função que dado um número, retorne se ele é par ou ímpar. */

// function parOuImpar(numero){
//   let resultado = numero/2;
  
//   if(numero % 2 == 0){
//     return 'Par';
//   }else (numero % 2 !== 1)
//     return 'Ímpar';
 
// }

// console.log(parOuImpar());

// /* 4. Faça uma função que dado um número, retorne a classificação do ângulo. 
// (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; 
// Ângulo reto: ângulo com medida igual a 90°; 
// Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; 
// Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com 
// medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°). */

// function retornarAngulo(numero){
//     if(numero > 0 && numero < 90){
//     return numero + 'º ' + 'é um ângulo agudo.'
//     }else if(numero == 90){
//       return numero + 'º ' + 'é um ângulo reto.'
//     }else if(numero > 90 && numero < 180){
//       return numero + 'º ' + 'é um ângulo obtuso.'
//     }else if(numero == 0 || numero == 180){
//       return numero + 'º ' + 'é um ângulo raso.'
//     }else if(numero >=181 && numero <= 359){
//       return numero + 'º ' + 'é um ângulo côncavo.'
//     }else if(numero == 360){
//       return numero + 'º ' + 'é um ângulo completo!.'
//     }
//   }
  
//   console.log(retornarAngulo());

// /* 5. Baseado na tabela abaixo, retorne a classificação de um produto. */
 
// function classificacaoProduto(numero){
//   if(numero == 1){
//     return 'Alimento não-perecível'
//   }else if( numero == 2 || numero == 3 || numero == 4){
//     return 'Alimento perecível'
//   } else if(numero == 5 || numero == 6){
//     return 'Vestuário'
//   }else if(numero == 7){
//     return 'Higiene Pessoal'
//   }else if(numero >=8 && numero <=15){
//     return 'Limpeza e útensílios domésticos'
//   }else {
//     return 'Código Inválido!'
//   }
// }

// console.log(classificacaoProduto());

// /* 6. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar. */

// function valorFinaldoItem(item, quantidade){
// 	if( item == '100'){
// 	return 1.70 * quantidade
// 	}else if (item == '101'){
// 	return 2.30 * quantidade
// 	}else if(item == '102'){
// 	return 2.60 * quantidade
// 	}else if(item == '103'){
// 	return 2.40 * quantidade
// 	}else if(item == '104'){
// 	return 2.50 * quantidade
// 	}else if(item == '105'){
// 	return 1.00 * quantidade
// 	}
// }

// let valorTotal = console.log(valorFinaldoItem(item, quantidade))

// function produtoEscolhido(item){
// if(item == '100'){
// return 'Cachorro quente'
// }else if (item == '101'){
// return 'Bauru Simples'
// }else if (item == '102'){
// return 'Bauru com ovo'
// }else if (item == '103'){
// return 'Hamburguer'
// }else if (item == '104'){
// return 'Cheeseburguer'
// }else if (item == '105'){
// return 'Refrigerante'
// 	}
// }
// let nomeItem = console.log(produtoEscolhido(item))

// console.log('Você comprou ' + quantidade + '' + nomeItem + ' dando um total de R$' + valorTotal)

// com switch

function compraTotal(produtoEscolhido, quantidadeComprada){
  switch (produtoEscolhido){
    case '100':
      nomeProduto = 'Cachorro quente';
      valorProduto = 1.70;
      valorTotal = quantidadeComprada * valorProduto;
      return ('Você comprou ' + quantidadeComprada + '' + nomeProduto + ' dando um total de R$' + valorTotal);
      
    
    case '101':
      nomeProduto = 'Bauru Simples';
      valorProduto = 2.30;
      valorTotal = quantidadeComprada * valorProduto;
      return ('Você comprou ' + quantidadeComprada + '' + nomeProduto + ' dando um total de R$' + valorTotal);
      

    case '102':
        nomeProduto = 'Bauru com ovo';
        valorProduto = 2.60;
        valorTotal = quantidadeComprada * valorProduto;
        return ('Você comprou ' + quantidadeComprada + '' + nomeProduto + ' dando um total de R$' + valorTotal);
        

    case '103':
      nomeProduto = 'Hamburguer';
      valorProduto = 2.40;
      valorTotal = quantidadeComprada * valorProduto;
      return ('Você comprou ' + quantidadeComprada + '' + nomeProduto + ' dando um total de R$' + valorTotal);
      

    case '104':
      nomeProduto = 'Cheeseburguer';
      valorProduto = 2.50;
      valorTotal = quantidadeComprada * valorProduto;
      return ('Você comprou ' + quantidadeComprada + '' + nomeProduto + ' dando um total de R$' + valorTotal);
      

    case '105':
      nomeProduto = 'Refrigerante';
      valorProduto = 1.00;
      valorTotal = quantidadeComprada * valorProduto;
      return ('Você comprou' + ' ' +  quantidadeComprada + ' ' + nomeProduto + ' dando um total de R$' + valorTotal);
      
  }
}

console.log(compraTotal('100', 4))