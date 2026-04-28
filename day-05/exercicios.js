//EXERCICIOS

// 🧩 1. Soma total

// 👉 soma todos os números (igual exemplo)

// 🧩 2. Multiplicação total

// 👉 multiplica todos os números

// 🧩 3. Maior número

// 👉 encontre o maior valor do array

// 🧩 4. Contar pares

// 👉 conte quantos números são pares

// 🧩 5. Soma só dos pares

// 👉 soma apenas números pares

// 🧩 6. Criar frase
// ["Olá", "mundo"]

// 👉 vira:

// "Olá mundo"
// 🧩 7. Total de preços
// [
//  { nome: "teclado", preco: 100 },
//  { nome: "mouse", preco: 50 }
// ]

// 👉 soma tudo

// 🧩 8. Contar itens

// 👉 retorne quantos itens tem (sem usar .length)

// 🧩 9. Array → objeto
// ["a", "b", "a"]

// 👉 vira:

// { a: 2, b: 1 }
// 🧩 10. Desafio (nível júnior)

// 👉 juntar tudo:

// soma
// filtro
// lógica

//RESULTADOS

const numbers = [1, 2, 3, 4, 6, 5];
const apresentacoes = ["Olá", "mundo"];
const compras = [
    { nome: "teclado", preco: 100 },
    { nome: "mouse", preco: 50 }
]
const letras = ["a", "b", "a"];


// 1
const somaTotal = numbers.reduce((acum, val) => {
    return acum + val
}, 0);
console.log(somaTotal);

// 2
const multiplicacaoTotal = numbers.reduce((acum, val) => {
    return acum * val
}, 1); // se deixar 0 todas as multiplicações serão 0
console.log(multiplicacaoTotal);

// 3
const maiorValor = numbers.reduce((oldValue, newValue) => {
    if (newValue > oldValue) {
        return oldValue = newValue
    } else {
        return oldValue
    }
}, 0)
console.log(maiorValor);

// 4 
const paresTotais = numbers.reduce((total, value) => {
    if (value % 2 === 0) {
        return total + 1
    } else {
        return total + 0
    }
}, 0);
console.log(paresTotais);

// 5
const somaPares = numbers.reduce((total, value) => {
    if (value % 2 === 0) {
        return total + value
    } else {
        return total + 0
    }
}, 0);
console.log(somaPares);

// 6
const apresentar = apresentacoes.reduce((oldString, newString) => {
    return oldString + ' ' + newString
}, '');
console.log(apresentar);

// 7
const gastos = compras.reduce((acum, val) => {
    return acum + val.preco
}, 0);
console.log(gastos);

// 8
const total = numbers.reduce((acum, item) => {
    return acum + 1
}, 0)
console.log(total)

// 9
const resultado = letras.reduce((acum, letra) => {
    if (acum[letra]) {
        acum[letra]++;
    } else {
        acum[letra] = 1;
    }

    return acum;
}, {});

console.log(resultado);
// 10 
const pedidos = [
    { produto: "teclado", preco: 100 },
    { produto: "mouse", preco: 50 },
    { produto: "teclado", preco: 100 },
    { produto: "monitor", preco: 800 }
];

const list = pedidos.reduce((acum, value) => {
    if (acum[value.produto]) {
        acum[value.produto]++;
    } else {
        acum[value.produto] = 1
    }
    return acum;
}, {})
console.log(list)
