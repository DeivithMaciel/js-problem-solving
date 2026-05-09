                //EXERCICIOS

                // 🔥 push() — adicionar no array
// 🧩 Exercício 1

// Começando com:

// const frutas = ["Maçã", "Banana"]

// Adicione:

// "Uva"

// e mostre o array no console.

// 🧩 Exercício 2

// Começando com:

// const numeros = [10, 20]

// Adicione:

// 30 e 40
// 🧩 Exercício 3

// Começando com:

// const usuarios = []

// Adicione um objeto:

// {
//     nome: "Carlos",
//     idade: 25
// }
// 🔥 pop() — remover último item
// 🧩 Exercício 1

// Começando com:

// const cores = ["Azul", "Verde", "Vermelho"]

// Remova o último item.

// 🧩 Exercício 2

// Mostre:

// qual item foi removido

// 💡 dica:

// pop retorna o item removido
// 🧩 Exercício 3

// Começando com:

// const nomes = ["Ana", "Carlos", "João"]

// Remova o último nome e depois mostre:

// quantos itens sobraram
// 🔥 some() — verificar condição
// 🧩 Exercício 1

// Começando com:

// const numeros = [5, 8, 12, 20]

// Verifique se existe número maior que 10.

// 🧩 Exercício 2

// Começando com:

// const nomes = ["Ana", "Carlos", "João"]

// Verifique se existe:

// "João"
// 🧩 Exercício 3

// Começando com:

// const usuarios = [
//     { nome: "Ana", idade: 17 },
//     { nome: "Carlos", idade: 25 }
// ]

// Verifique se existe alguém:

// menor de idade

                //RESPOSTAS
                
    //.PUSH()
const frutas = ["Maçã", "Banana"];
const numeros = [10, 20];
const usuarios = [];

//1
frutas.push("Uva");
console.log(frutas);

//2
numeros.push(30,40);
console.log(numeros);

//3
usuarios.push({nome: "carlos", idade: 25});
console.log(usuarios);


    //.POP()
const cores = ["Azul", "Verde", "Vermelho"]
const nomes = ["Ana", "Carlos", "João"]


//1
const removido = cores.pop()
console.log(cores);

//2
console.log("O item removido foi: " + removido)

//3
nomes.pop()
console.log(`Sobraram: ${nomes.length} itens`);

    //SOME()
const numbers = [5, 8, 12, 20]
const names = ["Ana", "Carlos", "João"]
const users = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 25 }
]

//1
console.log(numbers.some(n => n > 10));

//2
console.log(names.some(name => name.toLowerCase() === 'João'.toLowerCase()))

//3
function checagem() {
    const algumAdulto = users.some(user => user.idade >= 18)
    if(!algumAdulto) {
        console.log("Não existe algum adulto")
    } else {
        console.log("Existe algum adulto")
    }
}
checagem();


// 🎯 DESAFIO FINAL (misturando tudo)

// Começando com:

const carrinho = ["Teclado", "Mouse"]

// Faça:

// verificar se já existe "Mouse"
// se NÃO existir:
// adicionar
// se existir:
// remover último item

// 👀 aqui você vai usar:

// some
// push
// pop

function desafio() {
    const existe = carrinho.some(product => product.toLowerCase() === 'mouse'.toLowerCase())
    if (!existe) {
        carrinho.push('Mouse')
        console.log(carrinho);
    }   else {
        carrinho.pop()
        console.log(carrinho);
    }
}
desafio();