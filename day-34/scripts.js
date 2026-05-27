                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Crie:

// renderUsers(users)

// que renderiza lista completa.

// 🧩 EXERCÍCIO 2

// Faça busca dinâmica:

// enquanto digita
// 🧩 EXERCÍCIO 3

// Botão:

// Adultos

// ↓

// renderiza apenas:

// idade >= 18
// 🧩 EXERCÍCIO 4

// Botão:

// Todos

// ↓

// restaura lista inteira.

// 🧩 EXERCÍCIO 5 — IMPORTANTE

// Botão:

// A-Z

// ↓

// ordena alfabeticamente.

// 👀 use:

// localeCompare()
// 🧩 EXERCÍCIO 6

// Botão:

// Z-A

// ↓

// ordem inversa.

// 🚀 DESAFIO

// Quando:

// ✔ buscar
// ✔ ordenar
// ✔ filtrar

// ↓

// a interface deve atualizar automaticamente.

// 😈 DESAFIO BRUTAL

// Adicione:

// contador visual

// Exemplo:

// Total: 3 usuários

// 👀 e ele deve atualizar em TODOS os filtros/renderizações.

let usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 },
    { id: 4, name: "Marina", idade: 32 },
    { id: 5, name: "Felipe", idade: 20 }
];

const lista = document.querySelector('#lista')
const status = document.querySelector('#status')

const search = document.querySelector('#search')

const adultos = document.querySelector('#adultos')
const todos = document.querySelector('#todos')
const az = document.querySelector('#az')
const za = document.querySelector('#za')

function renderUsers(users) {
    lista.innerHTML = ''
    status.innerHTML = ''
    users.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `Usuario: ${name} - ${idade} anos`
        lista.appendChild(li)
    })
    status.innerHTML = `Total: ${users.length} usuarios` // evitei muito código com isso
}

function filterUser(texto) {
    const ordenado = usuarios.sort((a,b) => a.name.localeCompare(b.name))
    return ordenado.filter(({name}) => name.toLowerCase().includes(texto.toLowerCase()))
}

function searchUser() {
    const selected = search.value.trim()
    const filtrado = filterUser(selected)
    renderUsers(filtrado);
}

function filtrarAdultos() {
    const adultos = usuarios.filter(({idade}) => idade >= 18)
    renderUsers(adultos);
}

function alfabetico() {
    const ordenado = [...usuarios].sort((a,b) => a.name.localeCompare(b.name))
    renderUsers(ordenado);
}

function contrarioAlfabetico() {
    const ordenado = [...usuarios].sort((a,b) => b.name.localeCompare(a.name))
    renderUsers(ordenado);
}



todos.addEventListener('click', () => {
    renderUsers(usuarios)
});

adultos.addEventListener('click', filtrarAdultos);

az.addEventListener('click', alfabetico);

za.addEventListener('click', contrarioAlfabetico);

search.addEventListener('input', searchUser);
