// 🎯 EXERCÍCIOS — includes()

// Use:

// const nomes = ["Ana", "Carlos", "João", "Marina", "Felipe"];
// 🧩 1

// Verifique se existe algum nome contendo:

// "ri"
// 🧩 2

// Filtre nomes que possuem:

// "a"
// 🧩 3

// Crie um novo array com:

// true ou false

// informando se cada nome contém:

// "o"

// 💡 aqui entra map() junto.

// 🧩 4

// Conte quantos nomes possuem:

// "e"

// 💡 dica:

// filter + length
// 🧩 5

// Verifique se TODOS os nomes possuem pelo menos:

// uma letra "a"

// 💡 dica:

// every()
// 🎯 EXERCÍCIOS — startsWith()

// Use:

// const usuarios = [
//   { id: 1, name: "Ana" },
//   { id: 2, name: "Carlos" },
//   { id: 3, name: "João" },
//   { id: 4, name: "Marina" },
//   { id: 5, name: "Felipe" }
// ];
// 🧩 1

// Filtre usuários cujo nome começa com:

// "C"
// 🧩 2

// Verifique se existe algum usuário começando com:

// "J"
// 🧩 3

// Crie um array contendo apenas os nomes que começam com:

// "M"

// 💡 dica:

// filter + map
// 🧩 4

// Verifique se TODOS os usuários começam com letra maiúscula.

// 🧩 5 — MAIS IMPORTANTE

// Simule uma busca inteligente:

// const busca = "fe";

// Retorne usuários cujo nome começa com:

// fe

// independente de maiúsculo/minúsculo.

            //RESPOSTAS

//includes
const nomes = ["Ana", "Carlos", "João", "Marina", "Felipe"];

//1
console.log(nomes.some(n => n.toLowerCase().includes('ri')))

//2
console.log(nomes.filter(n => n.toLowerCase().includes('a')))

//3
console.log(nomes.map(n => n.toLowerCase().includes('o')));

//4
const total = nomes.filter(n => n.toLowerCase().includes('e'))
console.log(total.length)

//5
console.log(nomes.every(n => n.toLowerCase().includes('a')))


//startsWith
const usuarios = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" },
    { id: 3, name: "João" },
    { id: 4, name: "Marina" },
    { id: 5, name: "Felipe" }
];

//1
console.log(usuarios.filter(({ name }) => name.toUpperCase().startsWith('C')));

//2
console.log(usuarios.some(({name}) => name.toUpperCase().startsWith('J')));

//3
const filtrados = usuarios.filter(({name}) => name.toUpperCase().startsWith('M'))
console.log(filtrados.map(n => n.name))//Não consegui colocar o map nisso

//4
// console.log(usuarios.every(({name}) => {
//     return name.startsWith[0] === name.toUpperCase().startsWith[0]//não sei se tá certo ksksksksks
// }));
console.log(
    usuarios.every(({ name }) => {
    return name[0] === name[0].toUpperCase();
    })
);

//5
const busca = "fe";
// console.log(usuarios.filter(({name}) => name.toLowerCase().startsWith('fe')))
console.log(
    usuarios.filter(({ name }) =>
    name.toLowerCase().startsWith(busca.toLowerCase())
    )
);

// 🎯 DESAFIO EXTRA

// Ordene alfabeticamente…

// MAS…

// mostre apenas usuários cujo nome:

// ✔ contém "a"
// ✔ começa com "M" OU "C"

// console.log(usuarios.filter(({name}) => {
//     return name.toUpperCase().includes('A') && name.startsWith('M' || 'C')
// }));
console.log(
    usuarios
    .filter(({ name }) =>
        name.toLowerCase().includes('a') &&
        (name.startsWith('M') || name.startsWith('C'))
    )
    .sort((a, b) => a.name.localeCompare(b.name))
);
