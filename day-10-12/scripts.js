const URL = "https://jsonplaceholder.typicode.com/users"

const lista = document.querySelector('#lista')
const carregar = document.querySelector('#load')
const filtrar = document.querySelector('#filter')
const fechar = document.querySelector('#close')
const buscar = document.querySelector('#search')


const status = document.querySelector('#status')

let filtrado = false
let usuarios = []

function renderUsers(users) {
    lista.innerHTML = '';
    users.forEach(({ name }) => {
        const li = document.createElement('li');
        li.innerText = name
        lista.appendChild(li);
    })

}

async function getUsers() {
    try {
        status.innerHTML = "Carregando..."
        const res = await fetch(URL)
        const data = await res.json()
        usuarios = data
        renderUsers(usuarios);
        status.innerHTML = '';

    } catch {
        status.innerHTML = "Erro na busca"
    }
    // finally {
    //     status.innerHTML = ''
    // }
}

//botões
buscar.addEventListener('input', () => {
    const texto = buscar.value.trim()//trim pra n contar espaço
    if (texto.length === 0) {
        renderUsers(usuarios)
        status.innerHTML = '';
    } else {
        const filtrado = usuarios.filter((objeto) => {
            return objeto.name.toLowerCase().includes(texto.toLowerCase())
        })
        if (filtrado.length === 0) {
            status.innerHTML = "Nenhum usuario encontrado"
            lista.innerHTML = '';
        } else {
            renderUsers(filtrado)
            status.innerHTML = ''
        }
    }
})

carregar.addEventListener('click', getUsers);

fechar.addEventListener('click', () => {
    lista.innerHTML = '';
});

filtrar.addEventListener('click', () => {
    if (usuarios.length === 0) {
        console.log("Carrega dados primeiro");
        return
    }

    if (!filtrado) {
        //se filtrado é falso então tá com todos usuarios
        const filtrados = usuarios.filter(user => user.id > 5)
        renderUsers(filtrados); //filtra ususarios
        filtrado = true;
        filtrar.innerText = 'Mostrar todos'
        //vira um botão para mostrar tudo
    } else {
        renderUsers(usuarios);
        filtrado = false;
        filtrar.innerText = 'Filtrar ID > 5'
        //Vira um botão para filtrar
    }
})

