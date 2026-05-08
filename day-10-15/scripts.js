const URL = "https://jsonplaceholder.typicode.com/users"

const lista = document.querySelector('#lista')
const status = document.querySelector('#status')
const total = document.querySelector('#total')

const carregar = document.querySelector('#load')
const filtrar = document.querySelector('#filter')
const fechar = document.querySelector('#close')
const buscar = document.querySelector('#search')
const adicionar = document.querySelector('#addUser')
const remover = document.querySelector('#remove')


const novoUsuario = { id: 999, name: "Damfexx" };

let filtrado = false
let usuarios = []

function mostrarStatus(frase) {
    status.innerHTML = frase;
}

function limparStatus() {
    status.innerHTML = '';
}

function limparLista() {
    lista.innerHTML = '';
    limpaTotal();
}


function renderUsers(users) {
    limparLista();
    users.forEach(({ name }) => {
        const li = document.createElement('li');
        li.innerText = name
        lista.appendChild(li);
    })
}

function renderTotal(users) {
    const p = document.createElement('p');
    limpaTotal()
    p.innerText = "Total: " + users.length + " usuario(s)."
    total.appendChild(p)
}

function limpaTotal() {
    total.innerHTML = '';
}

async function getUsers() {
    try {
        mostrarStatus('Carregando...')
        setTimeout(async () => {
            const res = await fetch(URL)
            const data = await res.json()
            usuarios = data
            renderUsers(usuarios);
            renderTotal(usuarios)
            limparStatus()
        }, 1000)

    } catch {
        mostrarStatus('Erro na busca')
    }
}


function adicionarUsuario() {
    usuarios.push(novoUsuario)
    renderUsers(usuarios)
    renderTotal(usuarios)
}

function checagem() {
    const existe = usuarios.some(user => user.name === novoUsuario.name)
    if (!existe) {
        adicionarUsuario()
    } else {
        alert('Usuario já existente');
    }
}

function removerUltimo() {
    usuarios.pop(novoUsuario)
    renderUsers(usuarios)
    renderTotal(usuarios)
}

function filtrarUsuarios(texto) {
    return usuarios.filter((objeto) => {
        return objeto.name.toLowerCase().includes(texto.toLowerCase())
    })
}

function buscaCompleta() {
    const texto = buscar.value.trim()//trim pra n contar espaço
    const filtrado = filtrarUsuarios(texto)
    if (texto.length === 0) {
        renderUsers(usuarios)
        limparStatus()
    } else {
        if (texto.length < 2) {
            mostrarStatus("Digite pelo menos 2 letras")
            limparLista();
        } else if (filtrado.length === 0) {
            mostrarStatus("Nenhum usuario encontrado para: " + texto)
            limparLista();
        } else {
            renderUsers(filtrado)
            mostrarStatus(filtrado.length + " Usuario(s) encontrados")
        }
    }
}

//botões
buscar.addEventListener('input', buscaCompleta)

carregar.addEventListener('click', getUsers);

fechar.addEventListener('click', limparLista);

adicionar.addEventListener('click', checagem);

remover.addEventListener('click', removerUltimo)

// filtrar.addEventListener('click', () => {
//     if (usuarios.length === 0) {
//         console.log("Carrega dados primeiro");
//         return
//     }

//     if (!filtrado) {
//         //se filtrado é falso então tá com todos usuarios
//         renderUsers(); //filtra ususarios
//         filtrado = true;
//         filtrar.innerText = 'Mostrar todos'
//         //vira um botão para mostrar tudo
//     } else {
//         renderUsers(usuarios);
//         filtrado = false;
//         filtrar.innerText = 'Filtrar ID > 5'
//         //Vira um botão para filtrar
//     }
// })
