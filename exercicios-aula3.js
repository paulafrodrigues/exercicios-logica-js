/* 1. Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321. */

function inverterNumero(numero){
	return numero.toString().split('').reverse().join('');
}

console.log(inverterNumero('1234'));

/* 2. Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética. */

function ordenarPalavra(str){
  let palavra = str.split('');
  let ordena = palavra.sort();
  return ordena.join('');
}

console.log(ordenarPalavra('paula'));

/* 3. Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB". */

function pegarIniciais(nomeSobrenome){
  let letra1 = nomeSobrenome.substr(0, 1);
  let posicaoEspaco = nomeSobrenome.indexOf(' ');
  let letra2 = nomeSobrenome.substr(posicaoEspaco+1, 1);

    return letra1 + letra2;
  }

  console.log(pegarIniciais (prompt('Digite seu nome e sobrenome')));

/* 4. Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete. */

function receberBilhetes(quantidade){
  let sorteio = Math.floor(Math.random() * quantidade);
    return sorteio;
}
     
console.log(receberBilhetes(35));


/* 5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais. */
function calcularImc (peso, altura){
let imc = peso / altura**2;
console.log(imc.toFixed(2));

}

  let peso = prompt('Qual é o seu peso');
  let altura = prompt('Qual é a sua altura');
  calcularImc (peso, altura);