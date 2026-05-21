                    //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Encontre o índice de:

// Carlos
// 🧩 EXERCÍCIO 2

// Encontre o índice de:

// Marina
// 🧩 EXERCÍCIO 3

// Tente encontrar:

// Felipe

// e descubra:

// o que findIndex retorna quando NÃO encontra

// 👀 IMPORTANTÍSSIMO.

// 🧩 EXERCÍCIO 4

// Use findIndex() para:

// ✔ encontrar João
// ✔ alterar o nome dele para:

// João Editado

// 🚨 sem usar find().

// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Remova:

// Carlos

// usando:

// ✔ findIndex()
// ✔ splice()

// 👀 isso é MUITO usado no mundo real.

// 🚀 DESAFIO EXTRA

// Crie função:

// removerUsuario(nome)

// que:

// ✔ encontra índice
// ✔ remove usuário
// ✔ mostra mensagem se não existir

// 💡 Exemplo
// removerUsuario("João")

                    //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" },
    { id: 3, name: "João" },
    { id: 4, name: "Marina" }
];

//1
console.log(usuarios.findIndex(({name}) => name === 'Carlos' ));

//2
console.log(usuarios.findIndex(({name}) => name === 'Marina' ));

//3
console.log(usuarios.findIndex(({name}) => name === 'Felipe' ));
//Retorna -1 quando não acha

//4
function editarUsuario(nome) {
    const indice = usuarios.findIndex(user => {
        return user.name.toLowerCase() === nome.toLowerCase()
    })
    if (indice !== -1) {
        usuarios[indice].name += ' Editado'
    }
}
editarUsuario('joão')

//5
const index = usuarios.findIndex(({name}) => name === 'Carlos')
usuarios.splice(index, 1);
console.log(usuarios)

//DESAFIO

function removerUsuario(user) {
    const alvo = usuarios.findIndex(({name}) => name.toLowerCase() === user.toLowerCase())
    if (alvo === -1) {
        console.log('Usuario não encontrado')
    } else {
        usuarios.splice(alvo, 1)
        console.log(`O usuario ${user} foi removido`)
    }
}
removerUsuario('marina')