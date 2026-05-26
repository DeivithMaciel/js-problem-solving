                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Crie função:

// renderUsers(users)

// que:

// ✔ limpa lista
// ✔ renderiza usuários

// 🧩 EXERCÍCIO 2

// Pegue valor do input:

// search.value

// e mostre no console ao clicar botão.

// 🧩 EXERCÍCIO 3

// Agora:

// ✔ filtre usuários pelo texto digitado
// ✔ renderize apenas encontrados

// 👀 usando:

// ✔ filter()
// ✔ includes()
// ✔ renderUsers()

// 🧩 EXERCÍCIO 4 — IMPORTANTE

// Se:

// nenhum usuário encontrado

// renderize:

// <li>Nenhum usuário encontrado</li>
// 🧩 EXERCÍCIO 5 — MUITO IMPORTANTE

// Faça busca acontecer:

// enquanto digita

// 👀 usando:

// input

// ao invés de click.

// 🚀 DESAFIO

// Se input estiver vazio:

// ✔ renderize TODOS os usuários novamente.

// 😈 DESAFIO BRUTAL

// Adicione:

// ✔ botão “Mostrar adultos”
// ✔ botão “Mostrar todos”

// Resultado esperado
// Mostrar adultos
// idade >= 18
// Mostrar todos

// renderiza lista inteira novamente.

                //RESPOSTAS

const lista = document.querySelector('#lista')
const search = document.querySelector('#search')

const buttonTodos = document.querySelector('#todos')
const buttonAdultos = document.querySelector('#adultos')
const buttonSearch = document.querySelector('#buscar')

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 },
    { id: 4, name: "Marina", idade: 32 }
];

//1
function renderUsers(user) {
    lista.innerHTML = ''
    user.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `usuario: ${name} - ${idade} anos`
        lista.appendChild(li)
    });
}
// renderUsers(usuarios);

//2,3,4 e 5

function filtrarUsuarios(texto) {
    return usuarios.filter(({name}) => {
        return name.toLowerCase().includes(texto.toLowerCase())
    })
}

function searchUsers() {
    const searched = search.value.trim()
    const filtrado = filtrarUsuarios(searched)
    if (searched.length === 0) {
        renderUsers(usuarios)
    } else {
        if (filtrado.length === 0) {
        lista.innerHTML = `<li> nenhum usuario encontrado </li>`
    } else {
        renderUsers(filtrado)
    }
    }
}

function adultos() {
    const filtro = usuarios.filter(({idade}) => idade >= 18)
    renderUsers(filtro);
}

// buttonSearch.addEventListener('click', searchUsers)

search.addEventListener('input', searchUsers)

buttonTodos.addEventListener('click', () => {
    renderUsers(usuarios)
})

buttonAdultos.addEventListener('click', adultos)