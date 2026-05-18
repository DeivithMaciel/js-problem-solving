                //PERGUNTAS

// 🎯 PARTE 1 — join()
// 🧩 EXERCÍCIO 1

// Transforme o array em:

// Ana,Carlos,João
// 🧩 EXERCÍCIO 2

// Agora use:

// " - "

// como separador.

// Resultado esperado:

// Ana - Carlos - João
// 🧩 EXERCÍCIO 3

// Crie uma frase:

// Ana | Carlos | João
// 🧩 EXERCÍCIO 4

// Descubra:

// join() retorna array ou string?

// 👀 importante.

// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Simule tags:

// Array
// const tags = ["javascript", "react", "css"];
// Resultado esperado
// javascript, react, css
// 🚨 Agora o inverso
// 🎯 PARTE 2 — split()
// 📦 Use isso
// const frase = "Ana,Carlos,João";
// 🧩 EXERCÍCIO 1

// Transforme em array.

// 🧩 EXERCÍCIO 2

// Use:

// " "

// como separador.

// 📦 Nova frase
// const texto = "JavaScript é muito legal";
// 🧩 EXERCÍCIO 3

// Transforme em palavras separadas.

// 🧩 EXERCÍCIO 4

// Conte quantas palavras existem.

// 💡 dica:

// split + length
// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Transforme:

// "banana"

// em:

// ["b", "a", "n", "a", "n", "a"]

// 👀 essa é MUITO usada.

// 🚀 DESAFIO EXTRA

// Pegue:

// const usuarios = [
//   "Ana Silva",
//   "Carlos Souza",
//   "João Lima"
// ];

// e transforme em:

// Ana
// Carlos
// João

// 💡 dica:

// split(" ")

                //RESPOSTAS

    //join()
    const nomes = ["Ana", "Carlos", "João"];

//1
console.log(nomes.join(','));

//2
console.log(nomes.join(' - '));

//3
console.log(nomes.join(' | '));

//4
console.log(nomes.join(''));
//Resultado tudo junto sem virgula ou outra separação, retorna string com certeza

//5
const tags = ["javascript", "react", "css"];
console.log(tags.join(', '))

    //split()
    const frase = "Ana,Carlos,João";

//1
console.log(frase.split(','));

//2
const texto = "JavaScript é muito legal";
console.log(texto.split(''));

//3
console.log(texto.split(' '));

//4
console.log(texto.split(' ').length);

//5
console.log('banana'.split(''))//interessante, só testei no vai que dá, funciona string antes do split

//desafio
const usuarios = [
    "Ana Silva",
    "Carlos Souza",
    "João Lima"
];
console.log(usuarios.join(' ').split(' '))
//sinto q tem algo com os metodos q n me foi ensinado

console.log(usuarios.map(nomeCompleto => {
    return nomeCompleto.split(' ')[0]
}))

