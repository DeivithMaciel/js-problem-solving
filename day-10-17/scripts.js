const URL = "https://jsonplaceholder.typicode.com/users"

const lista = document.querySelector('#lista')
const status = document.querySelector('#status')
const total = document.querySelector('#total')

const buscar = document.querySelector('#search')
const nome = document.querySelector('#name')


const carregar = document.querySelector('#load')
const filtrar = document.querySelector('#filter')
const fechar = document.querySelector('#close')
const adicionar = document.querySelector('#addUser')
const remover = document.querySelector('#remove')
const alterar = document.querySelector('#change')

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

function limpaTotal() {
    total.innerHTML = '';
}

function renderTotal(users) {
    const p = document.createElement('p');
    limpaTotal()
    p.innerText = "Total: " + users.length + " usuario(s)."
    total.appendChild(p)
}

function renderUsers(users) {
    limparLista();
    users.forEach(({ id, name }) => {
        const li = document.createElement('li');
        li.innerText = `ID: ${id} - ${name}`
        lista.appendChild(li);
    })
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

function addName() {
    const novoUsuario = nome.value.trim();
    const usuario = {id: usuarios.length + 1, name: novoUsuario }
    const existir = usuarios.some(user => user.name === usuario.name)

    if (novoUsuario === '') {
        mostrarStatus('Digite um nome')
    } else if (!existir) {
        limparStatus();
        limpaTotal();
        usuarios.push(usuario);
        renderUsers(usuarios);
        renderTotal(usuarios);
        nome.value = '';
    } else {
        alert("Usuario já existente")
    }
}

function alterarUsuario() {
    limparStatus();
    const selecionado = nome.value.trim()
    const alvo = usuarios.find(user => user.name.toLowerCase() === selecionado.toLowerCase())
    if (!alvo) {
        mostrarStatus("Usuario não encontrado")
    } else {
        mostrarStatus(`O nome de usuario: ${alvo.name} foi editado`);
        alvo.name = `${alvo.name} Editado`
        renderTotal(usuarios);
        renderUsers(usuarios);
    }
}

function removerUsuario() {
    const selecionado = nome.value.trim()
    const filtragem = usuarios.filter(user => user.name.toLowerCase() != selecionado.toLowerCase())
    if (filtragem.length === usuarios.length) {
        mostrarStatus('Usuario não encontrado')
        nome.value = ''
    } else {
        usuarios = filtragem
        mostrarStatus(`Usuario '${selecionado}' removido`)
        renderUsers(usuarios);
        renderTotal(usuarios);
        nome.value = ''
    }
}

//botões/inputs
buscar.addEventListener('input', buscaCompleta);

carregar.addEventListener('click', getUsers);

alterar.addEventListener('click', alterarUsuario);

fechar.addEventListener('click', limparLista);

adicionar.addEventListener('click', addName);

remover.addEventListener('click', removerUsuario);


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
