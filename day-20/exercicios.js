                    //EXERCICIOS

// 🧩 EXERCÍCIO 1 — nomes em maiúsculo

// Transforme:

// todos os nomes para UPPERCASE
// 💡 Exemplo mental
// "ana"
// ↓
// "ANA"
// 🧩 EXERCÍCIO 2 — adicionar prefixo

// Transformar:

// Carlos

// em:

// Usuário: Carlos
// 🧩 EXERCÍCIO 3 — criar novo array só de nomes

// Hoje usuarios é:

// [
//   { id: 1, name: "Ana" }
// ]

// Transforme em:

// ["Ana"]
// 🚨 Conceito MUITO IMPORTANTE

// Hoje você vai começar a perceber:

// renderUsers()

// já é praticamente um map mental.

// Porque você faz:

// objeto
// ↓
// li HTML

// 👀 isso é transformação.

// 🧩 EXERCÍCIO 4 — adicionar propriedade nova

// Transforme usuários em:

// {
//    id: 1,
//    name: "Ana",
//    ativo: true
// }
// 🚨 Aqui começa:
// criação de novos objetos
// 🧩 EXERCÍCIO 5 — criar IDs personalizados

// Transforme:

// ID: 1 - Ana

// em:

// #001 - Ana

                    //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" },
    { id: 3, name: "João" },
    { id: 4, name: "Marina" },
    { id: 5, name: "Felipe" }
];
const nomes = ["Ana", "Carlos", "João", "Marina", "Felipe"];

//1
console.log(nomes.map(name => name.toUpperCase()));

//2
console.log(nomes.map(name => `Usuario: ${name}`));

//3
console.log(usuarios.map(({name}) => name));

//4
console.log(usuarios.map((user) => {
    return {
        id: user.id,
        name: user.name,
        ativo: true
    }
}))

//5
console.log(usuarios.map(({ id, name }) => {
    return `#${String(id).padStart(3, '0')} - ${name}`;
}))