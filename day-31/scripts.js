// 📦 Use isso
// const usuarios = [
//   { id: 1, name: "Ana", idade: 18 },
//   { id: 2, name: "Carlos", idade: 25 },
//   { id: 3, name: "João", idade: 15 }
// ];

// E no HTML:

// <ul id="lista"></ul>
// 🧩 EXERCÍCIO 1

// Renderize:

// apenas os nomes

// na <ul>.

// Resultado esperado
// <li>Ana</li>
// <li>Carlos</li>
// 🧩 EXERCÍCIO 2

// Agora renderize:

// nome + idade
// Resultado esperado
// <li>Ana - 18 anos</li>
// 🧩 EXERCÍCIO 3

// Adicione condição:

// ✔ maiores de idade → ✅
// ✔ menores → ❌

// Resultado esperado
// <li>Ana - 18 anos ✅</li>
// <li>João - 15 anos ❌</li>
// 🧩 EXERCÍCIO 4 — MUITO IMPORTANTE

// Renderize apenas:

// usuários adultos

// 👀 use:

// ✔ filter()
// ✔ forEach()

// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Crie função:

// renderUsers(users)

// que recebe QUALQUER array e renderiza.

// 👀 isso é mentalidade de componente.

// 🚀 DESAFIO

// Crie:

// buscarUsuarios(texto)

// que:

// ✔ filtra usuários
// ✔ renderiza automaticamente
// ✔ mostra apenas nomes encontrados

// 💡 Exemplo
// buscarUsuarios("an")

// ↓

// Ana

            //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];
const lista = document.querySelector('#lista')

//1
function renderUser(users) {
    users.forEach(({name}) => {
        const li = document.createElement('li')
        li.innerText = `${name}`
        lista.appendChild(li)
    });
}
// renderUser(usuarios)

//2
function userAge(users) {
    users.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `${name} - ${idade} anos`
        lista.appendChild(li)
    });
}
// userAge(usuarios)

//3
function condicao(users) {
    users.forEach(({name, idade}) => {
        const li = document.createElement('li')
        if (idade >= 18) {
            li.innerText = `${name} - ${idade} anos ✅`
        } else {
            li.innerText = `${name} - ${idade} anos ❌`
        }
        lista.appendChild(li)
    });
}
// condicao(usuarios)

//4
function adultos(user) {
    const filtragem = user.filter(({idade}) => idade >= 18)
    filtragem.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `${name} - ${idade} anos`
        lista.appendChild(li)
    });
}
// adultos(usuarios)

//5
//acidentalmente já fiz esse exercicio

//DESAFIO
const busca = 'an' //simular input.value.trim()
function buscarUsuario(texto) {
    const filtragem = usuarios.filter(({name}) => name.toLowerCase().includes(texto.toLowerCase()))
        filtragem.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `${name} - ${idade} anos`
        lista.appendChild(li)
    });
}
buscarUsuario(busca);