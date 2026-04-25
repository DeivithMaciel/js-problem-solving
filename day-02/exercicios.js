// 🧩 1. Contagem simples

// Mostre no console números de 1 até 10

// 🧩 2. Contagem reversa

// Mostre de 10 até 1

// 🧩 3. Números pares

// Mostre apenas números pares de 0 até 20

// 🧩 4. Percorrer array

// Crie um array com 5 nomes

// 👉 Mostre todos no console

// 🧩 5. Soma de números

// Crie um array com números

// 👉 Some todos e mostre o resultado

// 🧩 6. Maior número

// Crie um array

// 👉 Descubra qual é o maior número

// 🧩 7. Contar elementos

// Mostre quantos itens tem no array

// 🧩 8. Filtrar números

// Crie um array com números variados

// 👉 Mostre só os maiores que 10

// 🧩 9. Procurar valor

// Verifique se um número existe dentro de um array

// 👉 Se existir → “Encontrado”
// 👉 Senão → “Não encontrado”

// 🧩 10. Desafio (nível júnior)

// Crie um array de números

// 👉 Mostre:

// quantos são pares
// quantos são ímpares

// Respostas

// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for (let j = 11; j > 0; j--) {
    console.log(j);
}

// 3
for (let k = 0; k <= 20; k = k + 2) {
    console.log(k);
}

// 4
let bros = ['Gabriel', 'Claithon', 'Padilha', 'Sofia', 'Nicolas'];
for (let i = 0; i < bros.length; i++) {
    console.log(bros[i]);
}

// 5 soube mas não direito
let numbers = [1, 8, 10];
let soma = 0
// console.log(numbers[0] + numbers[1] + numbers[2]);
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log('A soma dos valoes são: ' + soma);

// 6 não soube
let maior = [18, 16, 20];
let maiorNumero = maior[0];

for (let l = 1; l < maior.length; l++) {
    if (maior[l] > maiorNumero) {
        maiorNumero = maior[l];
    }
}
console.log(maiorNumero);

// 7 
console.log(bros.length);

// 8 não soube
let nums = [1, 12, 15, 8, 5, 22];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 10) {
        console.log(nums[i]);
    }
}

// 9 não soube
let lista = [1, 3, 7, 9];
let procurado = 3;
let encontrado = false

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === procurado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Encontrado");
} else {
    console.log("Não encontrado");
}

// 10
let pares = 0
let impars = 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        pares++
    } else {
        impars++
    }
}
console.log('A quantidade de pares: ' + pares);
console.log('A quantidade de impars: ' + impars);



// MAIS EXERCICIOS

// 🧩 1. Soma apenas números pares

// Crie um array de números.

// 👉 Some apenas os números pares
// 👉 Mostre o resultado final

// 🧩 2. Contar números maiores que X

// Crie:

// um array de números
// uma variável limite (ex: 10)

// 👉 Conte quantos números do array são maiores que esse limite

// 🧩 3. Encontrar o menor número

// Você já fez o maior.

// 👉 Agora faça o contrário:

// percorra o array
// encontre o menor valor
// 🧩 4. Inverter array (sem usar .reverse())

// Crie um array.

// 👉 Mostre ele invertido

// Exemplo:

// [1, 2, 3] → [3, 2, 1]

// 👉 NÃO pode usar método pronto

// 🧩 5. Verificar duplicados

// Crie um array com números.

// 👉 Verifique se existe algum número repetido

// Se tiver:
// → “Tem duplicado”
// Se não:
// → “Tudo único”

// respostas

// 1
let moreNumbers = [1, 2, 3, 4, 5, 6, 7];
let acumulador = 0

for (let i = 0; i < moreNumbers.length; i++) {
    if (moreNumbers[i] % 2 === 0) {
        acumulador += moreNumbers[i]
    }
}
console.log(acumulador);

// 2
let limite = 5;
let resultado = 0;

for (let i = 0; i < moreNumbers.length; i++) {
    if (moreNumbers[i] > limite) {
        resultado++
    }
}
console.log('A quantidade de números acima do limite é: ' + resultado);

// 3
let numericos = [22, 55, 44, 12, 24];
let menorValor = numericos[0]

for (let i = 0; i < numericos.length; i++) {
    if (numericos[i] < menorValor) {
        menorValor = numericos[i];
    }
}
console.log(menorValor);


// 4
let invertido = [];

for (let i = 0; i < numericos.length; i++) {
    invertido[i] = numericos[numericos.length - 1 - i];
}

console.log(invertido);

// 5
let list = [2, 4, 6, 7, 9, 2];
let temDuplicado = false;

for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
        if (list[i] === list[j]) {
            temDuplicado = true;
        }
    }
}

if (temDuplicado) {
    console.log("Tem duplicado");
} else {
    console.log("Tudo único");
}

//loop dentro do loop