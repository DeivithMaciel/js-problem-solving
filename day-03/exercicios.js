                //EXERCICIOS

// 🧩 1. Função de saudação

// Crie uma função que:

// recebe um nome
// retorna: “Olá, [nome]”
// 🧩 2. Soma com função

// Crie uma função que:

// recebe dois números
// retorna a soma
// 🧩 3. Par ou ímpar (com função)

// Crie uma função que:

// recebe um número
// retorna se é par ou ímpar
// 🧩 4. Maior número (função)

// Crie uma função que:

// recebe dois números
// retorna o maior
// 🧩 5. Média de array

// Crie uma função que:

// recebe um array
// retorna a média dos números
// 🧩 6. Contar pares (função)

// Crie uma função que:

// recebe um array
// retorna quantos números são pares
// 🧩 7. Buscar valor

// Crie uma função que:

// recebe array + número
// retorna true se existir, false se não
// 🧩 8. Função com condição

// Crie uma função que:

// recebe idade
// retorna “maior de idade” ou “menor”
// 🧩 9. Inverter array (função)

// Você já fez isso

// 👉 agora coloca dentro de uma função

// 🧩 10. Desafio (nível júnior)

// Crie uma função que:

// recebe um array
// retorna o maior número

                //RESPOSTAS

// 1
let name = "Lucas"

function dizOla(nome) {
    return "Olá, " + nome
}

console.log(dizOla(name));

// 2
let x = 12;
let y = 3;

function soma(z,a) {
    return z + a
}
console.log(soma(x,y)); 

// 3
function parOuImpar(number) {
    // if (number % 2 === 0){
    //     return number + " É par"
    // } else {
    //     return number + " É impar"
    // }
    return number % 2 === 0
}
// console.log(parOuImpar(x));
// console.log(parOuImpar(y));
console.log(parOuImpar(x) ? "Par" : "Impar");
console.log(parOuImpar(y) ? "Par" : "Impar");

// 4 
function maior(a,b) {
    // if (a>b) {
    //     return a + " É maior"
    // } else {
    //     return b + " É maior"
    // }
    return a > b ? a : b;
}
console.log(maior(y,x));

// 5
let arrayNumeros = [1,2,3,4,6,5];

function media(array) {
    let soma = 0; // NÃO DECLARAR VARIAVEL USADO NA FUNÇÃO FORA DA FINCTION

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length
}
console.log(media(arrayNumeros));

// 6 
    function separar(array) {
        let pares = 0 // x
        let impares = 0 // y

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                pares++
            } else {
                impares++
            }
        }
        return pares + " números são prares e " + impares + " são ímpares."
    }
    console.log(separar(arrayNumeros));

// 7
let randomNumber = 3;

function buscarValor(n,array) {
    let confirmação = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true
        }
    }
    return false
}
console.log(buscarValor(randomNumber, arrayNumeros));

// 8
let idade = 24;

function adulto(n) {
    if (n >= 18) {
        return "É maior de idade"
    } else {
        return "É menor de idade"
    }
}
console.log(adulto(idade));

// 9
function invertido(array) {
    let invercao = [];

    for (let i = 0; i < array.length; i++) {
        invercao[i] = array[array.length - 1 - i];
    }
    return invercao
}
console.log(invertido(arrayNumeros));

// 10
function maiorDeles(array) {
    let maiorNumerico = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumerico) {
            maiorNumerico = array[i];
        }
    }
    return maiorNumerico
}

console.log(maiorDeles(arrayNumeros));