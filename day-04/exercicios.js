                //EXERCICIOS

// 🧩 1. Dobrar números (map)

// 👉 transformar números em dobro

// 🧩 2. Nomes em maiúsculo (map)

// 👉 transformar texto

// 🧩 3. Filtrar pares (filter)

// 👉 pegar só pares

// 🧩 4. Filtrar maiores que 10 (filter)

// 👉 pegar só maiores que 10

// 🧩 5. Encontrar número (find)

// 👉 pegar o primeiro que atende condição

// 🧩 6. Buscar nome (find)

// 👉 encontrar um item específico

// 🧩 7. Par ou ímpar (map)

// 👉 transformar número → texto

// 🧩 8. Entre 5 e 15 (filter)

// 👉 múltiplas condições

// 🧩 9. Produtos caros (filter)

// 👉 filtrar objetos

// 🧩 10. Só nomes (map)

// 👉 extrair propriedade

            // RESPOSTAS

const numbers = [1,2,4,5,6,8,10,13,14,17];
const names = ["lucas", "Mia", "Carlos","Paula"];
const listaDECompra = [
    { name: "Perfume", price: 299.99 },
    { name: "Pão", price: 4.99 },
    { name: "Refrigerante", price: 12.87 },
    { name: "2kg picanha", price: 147.90 }
];

// 1
console.log(numbers.map((newArray) => newArray * 2))

// 2 não soube
console.log(names.map(n => n.toUpperCase()))

// 3
console.log(numbers.filter((n) => n % 2 === 0));

// 4
console.log(numbers.filter((n) => n > 10));

// 5
console.log(numbers.find((n) => n > 13));

// 6
console.log(names.find((n) => n === "Mia"));

// 7
console.log(numbers.map(n => `${n} é ${n % 2 === 0 ? "par" : "ímpar"}`))
// eu queria colocar cada numero do lado da string, mas consegui

// 8
console.log(numbers.filter(n => n > 5 && n < 15));

// 9 
console.log(listaDECompra.filter((i) => i.price > 100));

// 10 
console.log(listaDECompra.map((i) => i.name));