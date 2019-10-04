// 14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo.

// let n = 10;
// let resultado = n;

// for(let i = n-1; i > 0; i--){
//     resultado *= i;
// }

// console.log(resultado);
// 15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.

// function retornarRandomicos(n){
//     return Math.floor(Math.random() * (n + 1));
// }
// let array = [];
// for (let i = 0 ; i < 10 ; i++){
//   array.push(retornarRandomicos(15));
// }

// console.log(array);

// 16. Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes. E no fim mostre quantas vezes deu cara e quantas coroa.

function jogarMoeda(quantidade){
    let coroa = 0;
    let cara = 0;

    for (let i = 0; i < quantidade; i++){
        let moeda = Math.round(Math.random());
        if (moeda == 1){
                coroa++
        }else {
            cara++
        }
    }
}

console.log(jogarMoeda(10));



// 17. Escreva um algoritmo que printe o seguinte padrão no console:

// *******

// ******

// *****

// ****

// ***

// **

// *

// for (let n = 0; n < 7; n++) { 
//     let estrelas = ""
//     for (let i = 0; i < (7 - n); i++) { 
//         estrelas += "*"
//     }
//     console.log(estrelas)
// }



// 18. Escreva um algoritmo que printe o seguinte padrão no console:

// 1

// 22

// 333

// 4444

// 55555

// for (let j = 1; j <= 5; j++) {
//     let linha = ""
//     for (let k = 2; k <= j; k++) {
//         linha += k
//     }
//     for (let i = j; i < 5; i++) { 
        
//     }
//     console.log(linha)
// }



// Momentos de Tensão
// 19. Pangrama é uma palavra que possui todas as letras do alfabeto. Faça um algoritmo que verifique se uma palavra é um pangrama ou não.

// 20.ee Crie um algoritmo que dados dois números calcule o MMC (Mínimo Múltipeelo Comum)
