/* 1. Crie um código que retorne a quantidade de pontos que seu time fez de 
acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. 
Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.) */

function calcularPonto(resultado){
  if(resultado === 'v'){
    return '3 pontos';
  }else if(resultado === 'e'){
    return '1 ponto';
  }else if(resultado === 'd'){
    return '0 ponto';
  }else {
     return 'Resultado desconhecido';
  }
}

console.log('Bora Bahia Minha Porra!!');
console.log(calcularPonto('v'));
console.log(calcularPonto('d'));
console.log(calcularPonto('e'));

/* refaça o código com switch */

function calcularPontos(resultado){

switch (resultado){
  case 'V':
    console.log('3 pontos');
  break;
  
  case 'E':
    console.log(' 1 ponto');
  break;
  
  case 'D':
    console.log('0 pontos');
  break;
  
  default:
    console.log('Você não informou o resultado corretamente, diabo!')  
  
}
  }

calcularPontos('V');
calcularPontos('e');

/* 2. Palíndromos são palavras ou frases que podem ser lidas da esquerda para a 
direita ou da direita para a esquerda. Crie uma função que informe se uma 
palavra é uma palíndromo. */

function informarPalindromo(palavra){
  let resultado = palavra.split('').reverse().join('');
     
  if(palavra === resultado){
    return resultado + ' é um Palíndromo!'
  } else{
    return resultado + ' não é um Palíndromo! =('
  }
}

console.log(informarPalindromo('dog'));
console.log(informarPalindromo('ama'))