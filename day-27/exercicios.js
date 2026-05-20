                    //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Filtre usuários contendo:

// "Silva"
// 🧩 EXERCÍCIO 2

// Filtre usuários contendo letra:

// "a"

// independente de maiúscula/minúscula.

// 👀 obrigatório usar:

// toLowerCase()
// 🧩 EXERCÍCIO 3

// Verifique se existe algum usuário contendo:

// "Rocha"

// 💡 use some() + includes().

// 🧩 EXERCÍCIO 4

// Conte quantos usuários possuem:

// nome com espaço

// 👀 dica:

// includes(' ')
// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Simule uma busca digitada.

// 📦
// const busca = "li";
// Resultado esperado

// Retornar:

// Carlos Souza
// Felipe Rocha

// 👀 porque possuem:

// "li"
// 🚀 DESAFIO EXTRA — nível projeto real

// Crie uma função:

// buscarUsuarios(texto)

// que:

// ✔ recebe texto digitado
// ✔ ignora maiúsculo/minúsculo
// ✔ retorna usuários encontrados
// ✔ mostra mensagem se vazio

// 💡 Exemplo
// buscarUsuarios("ana")
// Resultado
// Ana Silva
// 🚨 DESAFIO BRUTAL 😈

// Retorne usuários cujo nome:

// ✔ contém "a"
// ✔ NÃO contém "z"

// 👀 mistura:

// includes()
// +
// !

                    //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana Silva" },
    { id: 2, name: "Carlos Souza" },
    { id: 3, name: "João Lima" },
    { id: 4, name: "Marina Costa" },
    { id: 5, name: "Felipe Rocha" }
];

//1
console.log(usuarios.filter(({name}) => {
    return name.includes('Silva')
}))

//2
console.log(usuarios.filter(({name}) => {
    return name.toLowerCase().includes('a')
}))

//3
console.log(usuarios.some(({name}) => {
    return name.includes('Rocha')
}))

//4
const total = usuarios.filter(({name}) => {
    return name.includes(' ')
})
console.log(total.length);

//5
const busca = "li";
console.log(usuarios.filter(({name}) => {
    return name.toLowerCase().includes(busca)
}))

//DESAFIO

// function buscarUsuarios(texto) {
//     console.log(usuarios.filter((user) => {
//     return user.name.toLowerCase().includes(texto.toLowerCase())
// }))}
// buscarUsuarios('ANA')

function buscarUsuarios(texto) {
    return usuarios.filter(user => {
        return user.name
            .toLowerCase()
            .includes(texto.toLowerCase())
    })
}
console.log(buscarUsuarios('ANA'))

//DESAFIO2 'brutal'[risos]
console.log(usuarios.filter(({name}) => {
    return name.includes('a') && !name.includes('z')
}))
