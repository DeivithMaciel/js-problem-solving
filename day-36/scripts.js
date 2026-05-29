//EXERCICIOS

// 🧩 EXERCÍCIO 1

// Crie:

// gerarHTML(users)

// que retorna:

// <li>Ana Silva</li>
// <li>Carlos Souza</li>

// 👀 usando:

// ✔ map()
// ✔ join('')

// 🚨 IMPORTANTE

// Hoje NÃO use:

// appendChild
// 🧩 EXERCÍCIO 2

// Faça:

// lista.innerHTML = gerarHTML(usuarios)
// 🧩 EXERCÍCIO 3

// Adicione idade no HTML:

// <li>
//   Ana Silva - 18 anos
// </li>
// 🧩 EXERCÍCIO 4

// Adicione emoji:

// ✅ adulto
// ❌ menor
// 🧩 EXERCÍCIO 5 — IMPORTANTE

// Crie:

// usuariosAdultos()

// que retorna:

// HTML apenas adultos

// 👀 reutilizando:

// gerarHTML()
// 🧩 EXERCÍCIO 6

// Crie busca dinâmica:

// ✔ input
// ✔ filter
// ✔ gerarHTML
// ✔ innerHTML

// 🚀 DESAFIO

// Ordene alfabeticamente ANTES do HTML.

// 😈 DESAFIO BRUTAL

// Crie função:

// cardUsuario(user)

// que retorna:

// <div class="card">
//   <h2>Ana Silva</h2>
//   <p>18 anos</p>
// </div>

// Depois:

// map(cardUsuario)

// 👀 isso é literalmente:

// COMPONENTE REACT MENTAL


let usuarios = [
    { id: 3, name: "João Lima", idade: 15 },
    { id: 1, name: "Ana Silva", idade: 18 },
    { id: 2, name: "Carlos Souza", idade: 25 },
    { id: 4, name: "Marina Costa", idade: 32 }
];

const search = document.querySelector('#search');

const buttonAll = document.querySelector('#buttonAll');
const buttonAdultos = document.querySelector('#buttonAdultos');

const lista = document.querySelector('#lista');
const card = document.querySelector('#card');


//RESPOSTAS

function gerarHTML(users) {
    lista.innerHTML = ''
    users.sort((a, b) => a.name.localeCompare(b.name));
    return users.map(({ name, idade }) => {
        if (idade >= 18) {
            return `<li>${name} - ${idade} anos ✅</li>`
        } else {
            return `<li>${name} - ${idade} anos ❌</li>`
        }
    }).join('')
}

function usuariosAdultos() {
    const adultos = usuarios.filter(({ idade }) => idade >= 18)
    return gerarHTML(adultos)
}


function filterUser(texto) {
    return usuarios.filter(({ name }) => name.toLowerCase().includes(texto.toLowerCase()))
}

function buscaDinamica() {
    const busca = search.value.trim();
    const filtragem = filterUser(busca);
    lista.innerHTML = gerarHTML(filtragem);
}

function cardUsuario(user) {
    return `
        <li class="card">
            <h2>${user.name}</h2>
            <p>${user.idade} anos</p>
        </li>`
}
card.innerHTML = usuarios.map(cardUsuario).join('')

search.addEventListener('input', buscaDinamica);

buttonAll.addEventListener('click', () => {
    lista.innerHTML = gerarHTML(usuarios);
})

buttonAdultos.addEventListener('click', () => {
    lista.innerHTML = usuariosAdultos()
})
