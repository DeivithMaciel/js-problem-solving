                //EXERCICIOS

// 🧩 1. Filtro por texto (pré-busca)

// Crie um array:

// ["Carlos", "Ana", "Marcos", "Amanda", "João"]

// 👉 Retorne só os nomes que contêm a letra "a"

// 💡 dica: includes() + toLowerCase()

// 🧩 2. Transformar texto (map)

// Dado:

// ["banana", "maçã", "uva"]

// 👉 Retorne:

// ["BANANA", "MAÇÃ", "UVA"]
// 🧩 3. Buscar um item específico (find)

// Dado:

// [5, 8, 12, 20, 3]

// 👉 Encontre o primeiro número maior que 10

// 🧩 4. Contar quantos passam na regra (filter + length)

// Dado:

// [10, 25, 30, 5, 80, 12]

// 👉 Quantos números são maiores que 20?

// 🧩 5. Simulação de busca real (🔥 importante)

// Dado:

// [
//   { name: "Carlos" },
//   { name: "Ana" },
//   { name: "Marcos" },
//   { name: "Amanda" }
// ]

// 👉 Crie uma variável:

// const busca = "ma"

// 👉 Retorne todos os nomes que contêm esse texto

                //RESPOSTAS

const names = ["Carlos", "Ana", "Marcos", "Amanda", "João"];
const frutas = ["banana", "maçã", "uva"];
const numbers = [5, 8, 12, 20, 3];
const numeros = [10, 25, 30, 5, 80, 12];

//1
console.log(names.filter((name) => {
    return name.toLowerCase().includes("a")
}))

//2
console.log(frutas.map((name) => {
    return name.toUpperCase()
}))

//3
console.log(numbers.find(n => n > 10))

//4
const acumulo = numeros.filter(num => num > 20);
console.log(acumulo.length)

//5
    const busca = "ma"
console.log(names.filter((name) => {
    return name.toLowerCase().includes(busca.toLowerCase())
}))