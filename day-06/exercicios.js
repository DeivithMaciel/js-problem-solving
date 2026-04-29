            //EXERCICIOS


// 🧩 1. Acessar propriedades

// Crie objeto usuario e mostre:

// nome
// idade
// 🧩 2. Destructuring simples

// Extraia:

// nome
// idade
// 🧩 3. Função com destructuring

// Função que recebe objeto e retorna nome

// 🧩 4. map com objetos

// Retorne só os nomes de um array de produtos

// 🧩 5. filter com objetos

// Retorne produtos com preço > 100

// 🧩 6. reduce com objetos

// Some todos os preços

// 🧩 7. Desafio (nível júnior)
// const usuarios = [
//   { nome: "Ana", idade: 20 },
//   { nome: "João", idade: 17 },
//   { nome: "Maria", idade: 25 }
// ];

// 👉 retorne só maiores de idade

// 🧩 8. Desafio (real)

// 👉 retorne só os nomes dos maiores de idade

// 🧩 9. Desafio (reduce)

// 👉 conte quantos usuários são maiores de idade

// 🧩 10. Desafio final

// 👉 transforme isso:

// [
//   { produto: "teclado", preco: 100 },
//   { produto: "mouse", preco: 50 }
// ]

// 👉 em:

// ["teclado - R$100", "mouse - R$50"]


            //RESPOSTAS

const usuario = {
    nome: "Kleber",
    idade: 32
}

const lista = [
    { produto: "teclado", preco: 100 },
    { produto: "mouse", preco: 50 }
]

const usuarios = [
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 17 },
    { nome: "Maria", idade: 25 }
];

//1
console.log(usuario);

//2
const {idade, nome} = usuario

//3
function mostrar({ nome }) {
    return nome
}
console.log(mostrar(usuario));

//4
console.log(lista.map(({ produto }) => produto ));

//5
console.log(lista.filter(({ preco }) => preco > 100));

//6
console.log(lista.reduce((acum, {preco}) => {
    return acum + preco
}, 0));

//7
    console.log(usuarios.filter(({idade}) => idade >= 18));

//8
const soMaiores = usuarios
    .filter(({ idade }) => idade >= 18)
    .map(({ nome }) => nome);

console.log(soMaiores);

//9 
console.log(usuarios.reduce((acum, {idade}) => {
    if (idade > 18) {
        return acum + 1
    } else {
        return acum
    }
}, 0));

//10
console.log(lista.map(({ produto, preco }) => {
    return produto + ' - R$' + preco 
}))
