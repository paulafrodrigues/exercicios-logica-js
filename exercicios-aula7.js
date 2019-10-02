// // 1. Faça um algoritmo que imprima números inteiros de n a 1;

for(let n = 5;  n >=1; n--){
    console.log(n)
}

// // 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
let i = 0;

do{

    i++;
    if(i % 2 !== 0){
     console.log(i);       
    }
} while (i <100);

// // 4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000


let n = 0;

for( let i = 0; i < 1000; i++){
    if(i % 3 == 0 && i % 5 == 0){
        n += i;
    }
}

console.log('A soma dos múltiplos de 3 e 5 abaixo de 1000 é: ' +n);

//3. Dados dois números calcule o MDC deles


let mdc = 1;
let divisor = 2;
let x = 90;
let y = 54;

while (x > 1 && y > 1){
    if(x % divisor === 0 && y % divisor === 0){
        mdc *= divisor;
        x /= divisor;
        y /= divisor;
        
    } else if (x % divisor === 0){
        x /= divisor;
        
    } else if (y % divisor === 0){
        y /= divisor;
        
    }else{
        divisor++;
    }
}
console.log(mdc);