/* 1. Crie uma função que receba 1 parâmetro e calcule 5% de desconto, retornando o valor do desconto; */

function calcularDesconto (valor){
	let desconto = valor * 0.05;

	return desconto;
}
	let resultado = calcularDesconto(67);

/* 2. Crie uma função que receba 2 parâmetros e exiba o resultado e o resto da divisão entre eles; */

function callcularDivisao (valor1, valor 2){
	let divisao = valor1 / valor2;
	let resto = valor1 % valor2;
console.log('O resultado da divisão é ' + divisao + ' e o resto é ' + resto);
}

calcularDivisao( 9, 3);

/* 3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC; */

function calcularImc (peso, altura){
let imc = peso / altura**2;
console.log(imc);

}

  let peso = prompt('Qual é o seu peso');
  let altura = prompt('Qual é a sua altura');
  calcularImc (peso, altura);

/* 4 . Crie uma função que recebe 3 parâmetros, e utilizando a fórmula de Báskara, mostre o resultado de x' e x". */

function calcularBaskara(a, b, c){
  let delta = b**2 - 4*a*c;
  
  let x1 = (-b + Math.sqrt(delta))/ 2*a;
  
  let x2 = (-b - Math.sqrt(delta))/ 2*a;

console.log('O valor de x1 é ' + x1 + 'O valor de x2 é ' + x2);
  
}

calcularBaskara(1, 5, 4);


/* 5. Refatore seu código da questão anterior, de maneira que o novo código 
possua 3 funções: a. A primeira recebe 3 parâmetros e calcula apenas o 
resultado de "delta"; b. A segunda recebe 3 parâmetros e calcula o 
resultado de x'; c. A terceira recebe 3 parâmetros e calcula o 
resultado de x"; */

 function calcularDelta (a, b, c){
 return (b**2) - (4*a*c);

}

let delta = calcularDelta (1, 5, 4);
console.log('O valor de delta é: ' + delta);

function calcularX1 (a, b, delta){
  return (-b + Math.sqrt(delta)) / (2*a);
}

let x1 = calcularX1(1, 5, delta);
console.log('O valor de x1 é: ' + x1);

function calcularX2 (a, b, delta){
  return (-b - Math.sqrt(delta)) / (2*a);
}

let x2 = calcularX2 (1, 5, delta);
console.log('O valor de x2 é: ' + x2);

/* 6. Crie uma função que calcule quantos dias o usuário viveu, baseado na idade; */

function calcularDiasVividos(idade){
  
  return idade * 365
  
  
}

let idade = prompt('Diga sua idade')
let dias = calcularDiasVividos(idade);
console.log(dias)

/*7. Crie uma função que calcule quantos batidas por dia dá um coração, considerando que, ele bate a 70 bpm; Depois calcule quantas batidas o coração deu na vida da pessoa*/
function calclBpm(){
  let minutosDia = 60 * 24;
  let batidas = 70;
  return minutosDia * batidas;
}

let resultadoBpm = calclBpm();
//console.log(resultado)

function calcularDiasVividos(idade){
  
  return idade * 365
  
  
}

let idade = prompt('Diga sua idade')
let dias = calcularDiasVividos(idade);
//console.log(dias);

console.log('Seu coração bateu ' + resultadoBpm * dias + ' minutos em sua vida até agora'