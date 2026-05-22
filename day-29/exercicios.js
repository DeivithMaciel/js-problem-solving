                    //.MAP()

                    //EXERCICIOS


// 🧩 EXERCÍCIO 1

// Crie array contendo apenas:

// nomes em maiúsculo

// Resultado:

// ["ANA", "CARLOS", "JOÃO"]
// 🧩 EXERCÍCIO 2

// Crie array contendo:

// "Nome: Ana"
// Resultado esperado
// [
//  "Nome: Ana",
//  "Nome: Carlos"
// ]
// 🧩 EXERCÍCIO 3

// Crie NOVO array de objetos:

// Resultado esperado
// [
//   { nome: "Ana" },
//   { nome: "Carlos" },
//   { nome: "João" }
// ]

// 🚨 usando map().

// 🧩 EXERCÍCIO 4

// Adicione propriedade:

// adulto
// Resultado esperado
// {
//   id: 1,
//   name: "Ana",
//   idade: 18,
//   adulto: true
// }

// 👀 IMPORTANTÍSSIMO.

// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Transforme:

// [
//   { id: 1, name: "Ana" }
// ]

// em:

// [
//   "<li>Ana</li>"
// ]

// 👀 isso é MUITO React mentalidade.

// 🚀 DESAFIO EXTRA

// Crie array contendo:

// iniciais dos nomes
// Resultado esperado
// ["A", "C", "J"]

// 💡 dica:

// name[0]
// 🚨 DESAFIO BRUTAL 😈

// Transforme:

// Ana Silva

// em:

// {
//   primeiroNome: "Ana",
//   sobrenome: "Silva"
// }

// 👀 mistura:

// ✔ split()
// ✔ map()
// ✔ objeto novo


                    //EXERCICIOS

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];

//1
const maiusculo = usuarios.map(({name}) => name.toUpperCase());
console.log(maiusculo);

//2
const nomes = usuarios.map(({name}) => `Nome: ${name}`)
console.log(nomes);


//3
const newArray = usuarios.map(({name}) => {
    return {
        nome: name
    }
})
console.log(newArray);

//4
const adultos = usuarios.map(user => {
    return {
        ...user,
        adulto: user.idade >= 18
    }
})
console.log(adultos); //fui pesquisar exemplos e tinha uma dessa, eu não saberia fazer sozinho
//deixa registrado q tenho dificuldade de criar novo objeto

//5
// usuarios.map(({name}) => {
//     <li>{name}</li>
// })
const lista = usuarios.map(({name}) => {
    return `<li>${name}</li>`
})
console.log(lista)


//DESAFIO
const primeiro = usuarios.map(({name}) => name[0]);
console.log(primeiro);

//DESAFIO EXTRA

const usuarios2 = [
    { name: "Ana Silva" },
    { name: "Carlos Souza" },
    { name: "João Lima" }
]

const resultado = usuarios2.map(({ name }) => {
    const partes = name.split(' ')
    return {
        primeiroNome: partes[0],
        sobrenome: partes[1]
    }
})

console.log(resultado)