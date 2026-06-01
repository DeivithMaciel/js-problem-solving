//COMPONENTIZAÇÃO  MENTAL (PRÉ-REACT)

// 🧩 EXERCÍCIO 1

// Crie função:

// gerarUsuario(user)

// Ela deve retornar:

// <li>
//   Ana Silva - 18 anos
// </li>

// 🚨 só UM usuário.

// 🧩 EXERCÍCIO 2

// Agora faça:

// gerarLista(users)

// Ela deve:

// ✔ usar map
// ✔ chamar gerarUsuario()
// ✔ usar join('')

// 🚨 Exemplo mental
// gerarLista
// ↓
// gerarUsuario
// ↓
// HTML final
// 🧩 EXERCÍCIO 3

// Crie:

// gerarStatus(total)

// retornando:

// <p>Total: 4 usuários</p>
// 🧩 EXERCÍCIO 4

// Crie:

// renderTela(users)

// Ela deve:

// ✔ atualizar lista
// ✔ atualizar status

// 🚨 UMA função central.

// 🧩 EXERCÍCIO 5

// Crie:

// gerarCard(user)

// retornando algo tipo:

// <div class="card">
//   <h2>Ana Silva</h2>
//   <p>18 anos</p>
// </div>
// 🧩 EXERCÍCIO 6

// Crie:

// gerarCards(users)

// usando map.

// 😈 DESAFIO

// Adicione:

// ✅ adulto
// ❌ menor

// nos cards.

// 😈 DESAFIO BRUTAL

// Faça:

// renderTela()

// renderizar:

// ✔ lista
// ✔ status
// ✔ cards

// ao mesmo tempo.

//RESPOSTAS

let usuarios = [
    { id: 1, name: "Ana Silva", idade: 18 },
    { id: 2, name: "Carlos Souza", idade: 25 },
    { id: 3, name: "João Lima", idade: 15 },
    { id: 4, name: "Marina Costa", idade: 32 }
];

const lista = document.querySelector('#lista')
const status = document.querySelector('#status')
const cardList = document.querySelector('#cardList')

function gerarUsuario(user) {
    return `<li>${user.name} - ${user.idade} anos</li>`
}


function gerarLista(users) {
    return users.map((user) => {
        return gerarUsuario(user)
    }).join('')
}


function gerarStatus(total) {
    return `<li>Total: ${total} usuario(s)</li>`
}


function gerarCard(user) {
    if (user.idade >= 18) {
        return `
        <li class="card">
            <h2>${user.name} ✅</h2>
            <p>${user.idade} anos</p>
        </li>`
    } else {
        return `
        <li class="card">
            <h2>${user.name} ❌</h2>
            <p>${user.idade} anos</p>
        </li>`
    }
}


function renderTela(users) {

    lista.innerHTML = gerarLista(users)

    status.innerHTML = gerarStatus(users.length)

    cardList.innerHTML = users.map(gerarCard).join('')
}


renderTela(usuarios)