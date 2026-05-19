                    //EXERCICIOS

const { createElement } = require("react");

// 🧩 EXERCÍCIO 1

// Mostre todos os nomes no console usando forEach().

// 🧩 EXERCÍCIO 2

// Mostre frases assim:

// Ana tem 18 anos
// 🧩 EXERCÍCIO 3

// Some todas as idades usando forEach().

// 👀 sem reduce.

// 🧩 EXERCÍCIO 4

// Crie um novo array chamado:

// nomesMaiusculos

// contendo:

// ["ANA", "CARLOS", "JOÃO"]

// 🚨 usando forEach().

// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Descubra:

// forEach() retorna o quê?

// 👀 essa pega MUITA gente.

// 🚀 DESAFIO EXTRA

// Use forEach() para criar HTML.

// Resultado esperado:

// <li>Ana</li>
// <li>Carlos</li>
// <li>João</li>

// 💡 sem usar map.


                    //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];

//1
usuarios.forEach(({name}) => console.log(name))

//2
usuarios.forEach(({name, idade}) => {
    return console.log(`${name} tem ${idade} anos`)
})

//3
let total = 0
usuarios.forEach(({idade}) => {
    return total += idade
})
console.log(total)

//4
// usuarios.forEach(({name}) => {
//     const nomesMaiusculos = name.toUpperCase()
//     console.log(nomesMaiusculos.split(' '))
// })
const nomesMaiusculos = []
usuarios.forEach(({ name }) => {
    nomesMaiusculos.push(name.toUpperCase())
})
console.log(nomesMaiusculos)

//5 forEach retorna um ação envolvendo a array

//desafio
usuarios.forEach(({name, idade}) => {
    const li = document.createElement('li')
    li.innerText = `${name} - idade: ${idade}`
    lista.appendChild(li)
})