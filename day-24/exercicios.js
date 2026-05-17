// 🎯 PARTE 1 — slice()
// 🧩 EXERCÍCIO 1

// Pegue apenas:

// Carlos e João
// 🧩 EXERCÍCIO 2

// Pegue os 3 primeiros nomes.

// 🧩 EXERCÍCIO 3

// Pegue os 2 últimos nomes.

// 💡 dica:

// índice negativo
// 🧩 EXERCÍCIO 4

// Crie uma cópia COMPLETA do array usando slice().

// 🧩 EXERCÍCIO 5

// Verifique:

// o array original mudou?

// 👀 MUITO importante.

// 🚨 Agora começa o perigo 😈
// 🎯 PARTE 2 — splice()
// 🧩 EXERCÍCIO 1

// Remova:

// João
// 🧩 EXERCÍCIO 2

// Adicione:

// "Damfexx"

// na posição do João.

// 🧩 EXERCÍCIO 3

// Remova os 2 primeiros nomes.

// 🧩 EXERCÍCIO 4

// Substitua:

// Felipe

// por:

// "Gabriel"
// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Descubra:

// o splice retorna o quê?

// 👀 essa pega MUITA gente.

                //RESPOSTAS

const nomes = ["Ana", "Carlos", "João", "Marina", "Felipe"];
//1
console.log(nomes.slice(1,3));

//2
console.log(nomes.slice(0,3));

//3
console.log(nomes.slice(-2))

//4
const copia = nomes.slice()
console.log(copia);

//5
function teste() {
    const copia2 = nomes.slice()
    console.log(nomes)
}
teste() //Não mudou a array original.


//1
nomes.splice(2,1)
console.log(nomes)

//2
nomes.splice(3,0,'Damfexx')
console.log(nomes)

//3
nomes.splice(0,2)
console.log(nomes)

//4
nomes.splice(2,1,"Gabriel")
console.log(nomes)

//5
//splice() retorna os items removidos