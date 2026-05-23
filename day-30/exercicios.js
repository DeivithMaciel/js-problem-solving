            //EXERCICIOS REVISÃO BRUTAL

// 🧩 EXERCÍCIO 1

// Retorne apenas:

// usuarios adultos
// 🧩 EXERCÍCIO 2

// Crie array contendo:

// nomes em maiúsculo
// 🧩 EXERCÍCIO 3

// Verifique se existe alguém:

// menor de idade
// 🧩 EXERCÍCIO 4

// Retorne:

// quantidade total de letras

// de TODOS os nomes.

// 👀 use reduce().

// 🧩 EXERCÍCIO 5

// Ordene:

// A-Z
// 🧩 EXERCÍCIO 6

// Remova:

// João Lima

// usando:

// ✔ findIndex()
// ✔ splice()

// 🧩 EXERCÍCIO 7

// Transforme:

// Ana Silva

// em:

// {
//   primeiroNome: "Ana",
//   sobrenome: "Silva"
// }

// 👀 AGORA você consegue.

// 🧩 EXERCÍCIO 8 — MUITO IMPORTANTE

// Crie array assim:

// [
//   {
//     id: 1,
//     texto: "Ana Silva (18 anos)"
//   }
// ]

// 👀 isso mistura:

// ✔ map
// ✔ template string
// ✔ objeto novo

// 🚀 DESAFIO FINAL DA FASE 1

// Crie função:

// buscarAdultos(texto)

// que:

// ✔ busca nome digitado
// ✔ ignora maiúsculo/minúsculo
// ✔ retorna apenas adultos
// ✔ ordena A-Z
// ✔ retorna nomes formatados

// 💡 Resultado esperado
// [
//   "Ana Silva - 18 anos",
//   "Marina Costa - 32 anos"
// ]


            //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana Silva", idade: 18 },
    { id: 2, name: "Carlos Souza", idade: 25 },
    { id: 3, name: "João Lima", idade: 15 },
    { id: 4, name: "Marina Costa", idade: 32 },
    { id: 5, name: "Felipe Rocha", idade: 27 }
];

//1
console.log(usuarios.filter(({idade}) => idade >= 18))

//2
console.log(usuarios.map(({name}) => name.toUpperCase()));

//3
console.log(usuarios.some(user => user.idade < 18));

//4
console.log(usuarios.reduce((acum, user) => {
    return acum + user.name.length
}, 0))

//5
usuarios.sort((a,b) => a.name.localeCompare(b.name));
console.log(usuarios)

//6
const selecionado = usuarios.findIndex(({name}) => name === 'João Lima')
usuarios.splice(selecionado, 1)
console.log(usuarios)

//7
const nome = 'Ana Silva'
const partes = nome.split(' ')
console.log({
    primeiroNome: partes[0],
    sobrenome: partes[1]
})

//8
console.log(usuarios.map((user) => {
    return {
        id: user.id,
        texto: `${user.name} (${user.idade} anos)`
    }
}))

//final boss part 1
const digitado = 'na' //simular input.value.trim()
function buscarAdultos(texto) {
const filtragem = usuarios.filter(({name,idade}) => {
    return (
        name.toLowerCase().includes(texto.toLowerCase()) 
        &&
        idade >= 18
    )
    })
    console.log(filtragem.map(({name,idade}) => {
        return `${name} - ${idade} anos`
    }))
}
buscarAdultos(digitado)