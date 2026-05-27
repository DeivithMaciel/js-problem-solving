                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Crie:

// renderUsers(users)

// que renderiza:

// nome + idade
// 🧩 EXERCÍCIO 2

// Crie função:

// addUser()

// que:

// ✔ pega valores inputs
// ✔ cria objeto usuário
// ✔ adiciona na array
// ✔ renderiza novamente

// Resultado esperado
// Ana - 18 anos
// Carlos - 25 anos
// Novo usuário...
// 🧩 EXERCÍCIO 3 — IMPORTANTE

// Depois de adicionar:

// ✔ limpar inputs

// 🧩 EXERCÍCIO 4 — MUITO IMPORTANTE

// Se:

// ✔ nome vazio
// OU
// ✔ idade vazia

// ↓

// não adicionar usuário.

// 🧩 EXERCÍCIO 5 — FRONTEND REAL

// Adicione botão:

// Remover último

// que:

// ✔ remove último usuário
// ✔ renderiza novamente

// 🚀 DESAFIO

// Crie função:

// mostrarAdultos()

// que renderiza apenas:

// idade >= 18
// 😈 DESAFIO BRUTAL

// Crie botão:

// Editar João

// que altera:

// João
// ↓
// João Editado

// e renderiza automaticamente.

                //RESPOSTAS

let usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];

const lista = document.querySelector('#lista')

const inputNome = document.querySelector('#name')
const inputIdade = document.querySelector('#idade')

const add = document.querySelector('#add')
const adultos = document.querySelector('#adultos')
const remove = document.querySelector('#remove')
const change = document.querySelector('#change')

//1
function renderUsers(users) {
    lista.innerHTML = ''
    users.forEach(({name, idade}) => {
        const li = document.createElement('li')
        li.innerText = `Usuario: ${name} - ${idade} anos`
        lista.appendChild(li)
    });
}
renderUsers(usuarios);

//2 & 4
function addUser() {
    const anos = inputIdade.value.trim();
    const nome = inputNome.value.trim();
    const usuario = {id: usuarios.length + 1, name: nome, idade: anos}
    if (usuario.name.length === 0 || usuario.idade.length === 0) {
        alert('Preencher todos os campos')
    } else {
        usuarios.push(usuario);
        renderUsers(usuarios);
        inputNome.value = ''
        inputIdade.value = ''
    }
}
add.addEventListener('click', addUser)

//3
//fiz antes por capricho [risos]

//5 achei mais realista remover o usuario q deseja, n o ultimo
function removeUser() {
    const anos = inputIdade.value.trim();
    const nome = inputNome.value.trim();
    const filtragem = usuarios.filter(({name, idade}) => {
        return name.toLowerCase() != nome.toLowerCase() || idade != anos
    })
    if (anos.length === 0 || nome.length === 0) {
        alert('Preencher todos os campos')
    } else {
        if (filtragem.length === usuarios.length) {
        alert('Usuario não encontrado')
    } else {
        usuarios = filtragem
        renderUsers(usuarios);
        inputNome.value = ''
        inputIdade.value = ''
    }
    }
    
}

remove.addEventListener('click', removeUser)

//DESAFIO
function mostrarAdultos() {
    const adultos = usuarios.filter(({idade}) => idade >= 18)
    renderUsers(adultos)
}
adultos.addEventListener('click', mostrarAdultos)

//DESAFIO BRUAL
function changeName() {
    const nome = inputNome.value.trim();
    const selected = usuarios.find(({name}) => name.toLowerCase() === nome.toLowerCase())
    if (!selected) {
        alert('Usuario não encontrado') 
    } else {
        selected.name = `${selected.name} Editado`
        renderUsers(usuarios);
        inputNome.value = ''
        inputIdade.value = ''
    }
}
change.addEventListener('click', changeName);