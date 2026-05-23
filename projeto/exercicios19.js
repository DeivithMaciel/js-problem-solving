                    //EXERCICIOS

// 🔢 Tipo 1 — Ordenação de números
// 🧠 Exercício 1

// Ordene o array em ordem crescente:

// const numeros = [10, 2, 33, 4, 25];

// 👉 Objetivo: usar sort() corretamente para números (sem bug de string)

// 🧠 Exercício 2

// Ordene em ordem decrescente:

// const numeros = [5, 100, 1, 50, 20];
// 🧠 Exercício 3

// Ordene e depois filtre apenas os números maiores que 10:

// const numeros = [3, 12, 7, 25, 18, 1];

// 👉 Dica: primeiro sort, depois filter

// 🧑‍💻 Tipo 2 — Ordenação de nomes (strings)
// 🧠 Exercício 1

// Ordene alfabeticamente:

// const nomes = ["Lucas", "Ana", "Bruno", "Maria", "Carlos"];
// 🧠 Exercício 2

// Ordene em ordem reversa (Z → A):

// const nomes = ["Zeca", "João", "Amanda", "Bruno"];
// 🧠 Exercício 3

// Ordene ignorando maiúsculas/minúsculas:

// const nomes = ["ana", "Bruno", "carlos", "Amanda"];

// 👉 Dica: use .localeCompare()

// 🧾 Tipo 3 — Objetos (nome + número)
// 🧠 Exercício 1

// Ordene por idade crescente:

// const usuarios = [
//   { nome: "Lucas", idade: 25 },
//   { nome: "Ana", idade: 18 },
//   { nome: "Bruno", idade: 30 }
// ];
// 🧠 Exercício 2

// Ordene por idade decrescente:

// const usuarios = [
//   { nome: "Maria", idade: 22 },
//   { nome: "João", idade: 35 },
//   { nome: "Pedro", idade: 28 }
// ];
// 🧠 Exercício 3

// Ordene por nome em ordem alfabética:

// const usuarios = [
//   { nome: "Zeca", idade: 40 },
//   { nome: "Ana", idade: 20 },
//   { nome: "Bruno", idade: 25 }
// ];

// 👉 Dica: localeCompare() no campo nome

// ⚠️ Desafio extra (nível portfólio)

// Se quiser subir de nível:

// 👉 Ordena por idade, mas quem tiver menos de 25 vem primeiro, depois o resto em ordem normal.

                    //RESPOSTAS

//tipo 1: numeros
//1
const numeros = [10, 2, 33, 4, 25];
console.log(numeros.sort((a,b) => a - b));

//2
const numeros2 = [5, 100, 1, 50, 20];
console.log(numeros2.sort((a,b) => b - a));

//3
const numeros3 = [3, 12, 7, 25, 18, 1];
console.log(numeros3.sort((a,b) => a - b).filter(num => num > 10));

//tipo 2: nomes
//1
const nomes = ["Lucas", "Ana", "Bruno", "Maria", "Carlos"];
console.log(nomes.sort());

//2
const nomes2 = ["Zeca", "João", "Amanda", "Bruno"];
console.log(nomes2.sort().reverse());

//3
const nomes3 = ["ana", "Bruno", "carlos", "Amanda"];
console.log(nomes3.sort((a,b) => a.localeCompare(b))) //toLowerCase não funcionaria?

//tipo 3: nome e número
//1
const usuarios = [
    { nome: "Lucas", idade: 25 },
    { nome: "Ana", idade: 18 },
    { nome: "Bruno", idade: 30 }
];
console.log(usuarios.sort((a,b) => a.idade - b.idade));

//2
const usuarios2 = [
    { nome: "Maria", idade: 22 },
    { nome: "João", idade: 35 },
    { nome: "Pedro", idade: 28 }
];
console.log(usuarios2.sort((a,b) => b.idade - a.idade));

//3
const usuarios3 = [
    { nome: "Zeca", idade: 40 },
    { nome: "Ana", idade: 20 },
    { nome: "Bruno", idade: 25 }
];
console.log(usuarios3.sort((a,b) => a.nome.localeCompare(b.nome)));

                //DESAFIO
const usuarios4 = [
    { nome: "Lucas", idade: 28, ativo: true },
    { nome: "Ana", idade: 22, ativo: false },
    { nome: "Bruno", idade: 35, ativo: true },
    { nome: "Mariana", idade: 19, ativo: true },
    { nome: "Carlos", idade: 42, ativo: false },
    { nome: "Beatriz", idade: 25, ativo: true },
    { nome: "João", idade: 30, ativo: false }
];
usuarios4.sort((a, b) => {
    if (a.ativo !== b.ativo) {
    return b.ativo - a.ativo; // ativos primeiro
    }
    return a.idade - b.idade; // se for igual, ordena por idade
});
console.log(usuarios4);