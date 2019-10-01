// // 7. Escreva um código que receba dois número e determine qual o maior entre eles. 
// function determinarMaiorValor(num1, num2) {
//     if (num1 > num2) {
//         return num1 + ' é maior que ' + num2;
//     } else if (num2 > num1) {
//         return num2 + ' é maior que ' + num1;
//     } else {
//         return 'Esses números são iguais!'
//     }
// }
// console.log(determinarMaiorValor(1, 2));
// console.log(determinarMaiorValor(100, 10));
// console.log(determinarMaiorValor(100, 100));

// // 8. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.

// function diaDaSemana(numeroRecebido) {
//     switch (numeroRecebido) {
//         case '1':
//             return 'Segunda-Feira';
//         case '2':
//             return 'Terça-Feira';
//         case '3':
//             return 'Quarta-Feira';
//         case '4':
//             return 'Quinta-Feira';
//         case '5':
//             return 'Sexta-Feira';
//         case '6':
//             return 'Sábado';
//         case '7':
//             return 'Domingo';

//     }
// }

// console.log(diaDaSemana('3'));

// // 9. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem.

// function dizerMesEdias(numeroInformado) {
//     switch (numeroInformado) {
//         case '1':
//             return 'O mês é Janeiro e ele tem 31 dias.';
//         case '2':
//             return 'O mês é Fevereiro e ele tem 28 dias.';
//         case '3':
//             return 'O mês é Março e ele tem 31 dias.';
//         case '4':
//             return 'O mês é Abril e ele tem 30 dias.';
//         case '5':
//             return 'O mês é Maio e ele tem 31 dias.';
//         case '6':
//             return 'O mês é Junho e ele tem 30 dias.';
//         case '7':
//             return 'O mês é Julho e ele tem 31 dias.';
//         case '8':
//             return 'O mês é Agosto e ele tem 31 dias.';
//         case '9':
//             return 'O mês é Setembro e ele tem 30 dias.';
//         case '10':
//             return 'O mês é Outubro e ele tem 31 dias.';
//         case '11':
//             return 'O mês é Novembro e ele tem 30 dias.';
//         case '12':
//             return 'O mês é Dezembro e ele tem 31 dias.';

//     }
// }

// console.log(dizerMesEdias('11'));

// // 10. Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.

// function determinarVogalOuConsoante(letra){
//     letra = letra.toLowerCase()
//     switch(letra){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 'Essa letra é uma vogal!';
//         default:
//             return 'Essa letra é uma consoante!';

//     }
// }

// console.log(determinarVogalOuConsoante('H'));
// console.log(determinarVogalOuConsoante('a'));
// console.log(determinarVogalOuConsoante('j'));

// // 11. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

// function determinarValidadeAngulo( angulo1, angulo2, angulo3){
//     if(angulo1 + angulo2 + angulo3 === 180){
//         return 'Esse triângulo é válido!'
//     }else{
//         return 'Esse triângulo não é válido!'
//     }
// }

// console.log(determinarValidadeAngulo(10, 100, 70));
// console.log(determinarValidadeAngulo(100, 5, 10));

// //12. Vamos reescrever a função de Báskara. Para isso temos que verificar atráves de delta se é possível calcular x' e x". Se delta for menor que zero, a equação não tem raízes. Se delta for igual a zero, a equação tem uma raiz. Se delta for maior que zero, a equação tem duas raízes.


// // function calcularBaskara(a, b, delta){
// //     let delta = b**2 - 4*a*c;
    
// //     let x1 = (-b + Math.sqrt(delta))/ 2*a;
    
// //     let x2 = (-b - Math.sqrt(delta))/ 2*a;
  
// //   console.log('O valor de x1 é ' + x1 + 'O valor de x2 é ' + x2);

function calcularBaskara(a, b, delta){
     delta = b**2 - 4*a*delta;
    if(delta < 0){
        return 'A equação não tem raíz.';
    }else if(delta === 0){
        x1 = (-b + Math.sqrt(delta))/2*a;
        return 'O valor de delta é 0 e o valor de x1 é ' + x1;
        }else{
            x1 = (-b + Math.sqrt(delta))/2*a;
            x2 = (-b - Math.sqrt(delta))/2*a;
            return 'A equação tem duas raízes ' + x1 + ' e ' + x2;
        }
    }

    console.log(calcularBaskara(3, 3, 9));

    //13. Crie uma calculadora simples.

    function calculadoraSimples(valor1, valor2, funcaoDesejada){
    
        if(funcaoDesejada === 'somar'){
            return valor1 + valor2;
        }else if(funcaoDesejada === 'subtrair'){
            return valor1 - valor2;
        }else if(funcaoDesejada === 'dividir'){
            return valor1 / valor2;
        }else if(funcaoDesejada === 'multiplicar'){
            return valor1 * valor2;
        }
    }

    console.log(calculadoraSimples(10, 15, 'somar'));