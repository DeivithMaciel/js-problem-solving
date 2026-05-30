//EXERCICIOS

// 🧩 EXERCÍCIO 1

// Crie:

// const copia = [...usuarios]

// e teste:

// copia.sort(...)

// Depois:

// console.log(usuarios)

// 👀 observe que original NÃO mudou.

// 🧩 EXERCÍCIO 2

// Crie:

// ordenarAZ(users)

// que:

// ✔ recebe array
// ✔ cria cópia
// ✔ ordena cópia
// ✔ retorna cópia ordenada

// 🧩 EXERCÍCIO 3

// Faça também:

// ordenarZA(users)
// 🧩 EXERCÍCIO 4 — IMPORTANTE

// Crie:

// filtrarAdultos(users)

// 👀 recebendo array por parâmetro.

// 🧩 EXERCÍCIO 5

// Crie:

// buscarUsuarios(users, texto)
// 🚀 EXERCÍCIO 6 — O MAIS IMPORTANTE

// Crie função:

// atualizarTela()

// Ela deve:

// ✔ começar com cópia dos usuários
// ✔ aplicar filtros ativos
// ✔ aplicar busca
// ✔ aplicar ordenação
// ✔ renderizar resultado final

// 💡 Você vai precisar de estados:
// let busca = ''
// let somenteAdultos = false
// let ordem = 'az'
// 🚨 IMPORTANTE

// Hoje você vai começar a entender:

// ESTADO VISUAL
// 😈 DESAFIO

// Botão:

// "resetar filtros"

// que volta tudo ao padrão.

// 😈 DESAFIO BRUTAL

// Mostre no status:

// Filtros ativos:
// ✅ adultos
// ✅ busca
// ❌ ordem reversa

//RESPOSTAS

let usuarios = [
    { id: 1, name: "Ana Silva", idade: 18 },
    { id: 2, name: "Carlos Souza", idade: 25 },
    { id: 4, name: "Marina Costa", idade: 32 },
    { id: 3, name: "João Lima", idade: 15 },
    { id: 5, name: "Felipe Rocha", idade: 20 }
];

const search = document.querySelector('#search')

const all = document.querySelector('#all')
const az = document.querySelector('#az')
const za = document.querySelector('#za')
const adulto = document.querySelector('#adultos')

const lista = document.querySelector('#lista')
const status = document.querySelector('#status')

let busca = false
let adultos = false
let ordemReversa = false

//1
// const copia = [...usuarios]
// console.log(copia.sort((a,b) => a.name.localeCompare(b.name))); saiu ordenado
// console.log(usuarios); saiu normal

function renderUsers(users) {
    lista.innerHTML = ''
    users.forEach(({ name, idade }) => {
        const li = document.createElement('li')
        li.innerText = `${name} - ${idade} anos`
        lista.appendChild(li)
    })
}

function atualizarTela() {
    const procura = search.value.trim()
    if (procura.length === 0) {
        busca = false
    } else {
        busca = true
    }
    let resultado = [...usuarios]
    resultado = resultado.filter(({name}) => name.toLowerCase().includes(procura.toLowerCase()))
    if (adultos === true) {
        resultado = resultado.filter(({idade}) => idade >= 18)
    }
    if (ordemReversa === true) {
        resultado.sort((a,b) => b.name.localeCompare(a.name))
    } else {
        resultado.sort((a,b) => a.name.localeCompare(b.name))
    }
    statusAtivos()
    renderUsers(resultado);
}

// function filterAdult(users) {
//     const filtered = users.filter(({ idade }) => idade >= 18);
//     adulto = true
//     renderUsers(filtered);
//     atualizarTela()
// }

// function ordenarAZ(users) {
//     const copia = [...users];
//     copia.sort((a, b) => a.name.localeCompare(b.name))
//     ordemReversa = false
//     atualizarTela()
// }

// function ordenarZA(users) {
//     const copia = [...users];
//     copia.sort((a, b) => b.name.localeCompare(a.name))
//     ordemReversa = true
//     atualizarTela()
// }

// function searchUsers(users) {
//     const busca = search.value.trim()
//     const filtragem = users.filter(({ name }) => name.toLowerCase().includes(busca.toLowerCase()))
//     renderUsers(filtragem)
//     atualizarTela()
// }

function statusAtivos() {
    status.innerHTML = ''
    let buscaString = ''
    let adultosString = ''
    let ordemString = ''
    if (!busca) {
        buscaString = '❌'
    } else {
        buscaString = '✅'
    }
    if (!adultos) {
        adultosString = '❌'
    } else {
        adultosString = '✅'
    }
    if (!ordemReversa) {
        ordemString = '❌'
    } else {
        ordemString = '✅'
    }
    status.innerHTML = `
    <li class="status">
    <p>Busca: ${buscaString}</p>
    <p>Adultos: ${adultosString}</p>
    <p>Ordem reversa: ${ordemString}</p>
    `
}

search.addEventListener('input', atualizarTela)

all.addEventListener('click', () => {
    ordemReversa = false
    adultos = false
    search.value = ''
    atualizarTela()
})

az.addEventListener('click', () => {
    ordemReversa = false
    atualizarTela()
})

za.addEventListener('click', () => {
    ordemReversa = true
    atualizarTela()
})

adulto.addEventListener('click', () => {
    adultos = !adultos
    atualizarTela()
})
