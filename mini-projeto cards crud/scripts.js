let usuarios = [
    {
        id: 1,
        name: "Ana Silva",
        idade: 18,
        cargo: "Frontend Developer",
        cidade: "Porto Alegre",
        ativo: true
    },
    {
        id: 2,
        name: "Carlos Souza",
        idade: 25,
        cargo: "UI Designer",
        cidade: "São Paulo",
        ativo: false
    },
    {
        id: 3,
        name: "João Lima",
        idade: 15,
        cargo: "Estagiário",
        cidade: "Curitiba",
        ativo: true
    },
    {
        id: 4,
        name: "Marina Costa",
        idade: 32,
        cargo: "Tech Recruiter",
        cidade: "Florianópolis",
        ativo: true
    },
    {
        id: 5,
        name: "Felipe Rocha",
        idade: 20,
        cargo: "Backend Developer",
        cidade: "Belo Horizonte",
        ativo: false
    }
];

const cardList = document.querySelector('#cardList');
const status = document.querySelector('#status');
const total = document.querySelector('#total');

const search = document.querySelector('#search');

const buttonAdult = document.querySelector('#buttonAdult');
const buttonAlfabetizado = document.querySelector('#buttonAlfabetizado');
const buttonReset = document.querySelector('#reset');
const buttonDisponiveis= document.querySelector('#disponiveis');

const nome = document.querySelector('#nome');
const anos = document.querySelector('#anos');
const cargo = document.querySelector('#cargo');
const cidade = document.querySelector('#cidade');
const buttonAdd = document.querySelector('#buttonAdd');

const toggleCards = document.querySelector('#toggleCards');
const buttonDark = document.querySelector('#buttonDark');
const buttonCompact = document.querySelector('#buttonCompact');

const message = document.querySelector('#message');

const state = {
    busca: '',
    adultos: false,
    ordemAZ: true,
    disponiveis: false
}

let editandoId = null

function saveUsers() {  //LOCAL STORAGE
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const usuariosSalvos = localStorage.getItem('usuarios')

if (usuariosSalvos) {
    usuarios = JSON.parse(usuariosSalvos)
}

function renderCards(user) {
    if (!user.ativo) {
        if (user.idade >= 18) {
            return `
            <li class='cardItem inativo'> 
            <h2>${user.name}</h2>
            <a class='card adulto'>${user.idade} anos</a>
            <h4>${user.cargo}</h4>
            <h4>${user.cidade}</h4>
            <p>Disponivel:❌</p><button class='buttonNotActive' onclick='toggleActive(${user.id})'>Disponibilizar</button>
            <button onclick='removeUser(${user.id})'>Remover</button>
            <div><button onclick='editUser(${user.id})'>Editar</button></div>
            </li>`
        } else {
            return `
            <li class='cardItem inativo'> 
            <h2>${user.name}</h2>
            <a class='card menor'>${user.idade} anos</a>
            <h4>${user.cargo}</h4>
            <h4>${user.cidade}</h4>
            <p>Disponivel:❌</p><button class='buttonNotActive' onclick='toggleActive(${user.id})'>Disponibilizar</button>
            <button onclick='removeUser(${user.id})'>Remover</button>
            <div><button onclick='editUser(${user.id})'>Editar</button></div>
            </li>`
        }
    } else {
        if (user.idade >= 18) {
            return `
            <li class='cardItem ativo'> 
            <h2>${user.name}</h2>
            <a class='card adulto'>${user.idade} anos</a>
            <h4>${user.cargo}</h4>
            <h4>${user.cidade}</h4>
            <p>Disponivel:✅</p><button class='buttonActive' onclick='toggleActive(${user.id})'>Indisponibilizar</button>
            <button onclick='removeUser(${user.id})'>Remover</button>
            <div><button onclick='editUser(${user.id})'>Editar</button></div>
            </li>`
        } else {
            return `
            <li class='cardItem ativo'> 
            <h2>${user.name}</h2>
            <a class='card menor'>${user.idade} anos</a>
            <h4>${user.cargo}</h4>
            <h4>${user.cidade}</h4>
            <p>Disponivel:✅</p><button class='buttonActive' onclick='toggleActive(${user.id})'>Indisponibilizar</button>
            <button onclick='removeUser(${user.id})'>Remover</button>
            <div><button onclick='editUser(${user.id})'>Editar</button></div>
            </li>`
        }
    }
}

function statusUpdate() {
    status.innerHTML = '';
    let buscaString = '❌';
    let alfabeticoString = '❌';
    let adultoString = '❌';
    let disponiveisString = '❌';
    if (state.busca) {
        buscaString = '✅'
    }
    if (state.ordemAZ) {
        alfabeticoString = '✅'
    }
    if (state.adultos) {
        adultoString = '✅'
    }
    if (state.disponiveis) {
        disponiveisString = '✅'
    }
    status.innerHTML = `
    <ul class='statusList'>
    <li>Busca:${buscaString}</li>
    <li>Ordem alfabética:${alfabeticoString}</li>
    <li>Adultos:${adultoString}</li>
    <li>Disponiveis:${disponiveisString}</li>
    </ul>`
}

function toggleActive(id) {
    const usuario = usuarios.find((user) => user.id === id)
    usuario.ativo = !usuario.ativo
    saveUsers()
    renderList()
}

function toggleAdults(users) {
    if (state.adultos) {
        users = users.filter(({idade}) => idade >= 18)
    }
    return users
}

function togglesearch(users) {
    const searched = search.value.trim()
    users = users.filter(({ name }) => {
        return name.toLowerCase().includes(searched.toLowerCase())
    })
    return users
}

function toggleAlfabetico(users) {
    if (state.ordemAZ) {
        users = [...users].sort((a,b) => a.name.localeCompare(b.name))
    } else {
        users = [...users].sort((a,b) => b.name.localeCompare(a.name))
    }
    return users
}

function toggleDisponiveis(users) {
    if (state.disponiveis === true) {
        users = users.filter(({ativo}) => ativo === true)
    }
    return users
}

function renderList() {
    total.innerHTML = ''
    cardList.innerHTML = ''
    let resultado = [...usuarios]
    
    resultado = toggleAlfabetico(resultado)
    resultado = toggleAdults(resultado)
    resultado = toggleDisponiveis(resultado)
    resultado = togglesearch(resultado)
    
    if (resultado.length === 0) {
        cardList.innerHTML = '<h3>Nenhum usuario encontrado</h3>'
    } else {
        cardList.innerHTML = resultado.map(renderCards).join('')
    }
    
    total.innerHTML = `Total: ${resultado.length} usuarios`
    statusUpdate()
}
renderList()

function addUser() {
    if (editandoId !== null) {
        const usuario = usuarios.find((user) => user.id === editandoId)

        usuario.name = nome.value
        usuario.idade = anos.value
        usuario.cargo = cargo.value
        usuario.cidade = cidade.value

        nome.value = ''
        anos.value = ''
        cargo.value = ''
        cidade.value = ''

        saveUsers()
        renderList()

        editandoId = null
        return
    }

    const newUser = {
        id: usuarios.length + 1,
        name: nome.value.trim(),
        idade: anos.value,
        cargo: cargo.value.trim(),
        cidade: cidade.value.trim(),
        ativo: false
    }
    if (newUser.name.length === 0 | newUser.idade.length === 0 | newUser.cargo.length === 0 | newUser.cidade.length === 0) {
        alert('Preencha todos os campos')
    }  else {
        usuarios.push(newUser)
        message.innerHTML = `O ususario: ${newUser.name} foi adicionado`
        setTimeout(() => {
            message.innerHTML = ''
        }, 3000)

        nome.value = ''
        anos.value = ''
        cargo.value = ''
        cidade.value = ''

        saveUsers()
        renderList()
    }
}

function removeUser(id) {
    usuarios = usuarios.filter((user) => user.id != id)
    saveUsers()
    renderList()
}

function editUser(id) {
    usuario = usuarios.find(user => user.id === id)

    nome.value = usuario.name
    anos.value = usuario.idade
    cargo.value = usuario.cargo
    cidade.value = usuario.cidade

    editandoId = id
}

search.addEventListener('input', () => {
    if (search.value.length === 0) {
        state.busca = false
    } else {
        state.busca = true
    }
    renderList()
})

buttonAlfabetizado.addEventListener('click', () => {
    state.ordemAZ = !state.ordemAZ
    if (state.ordemAZ) {
        buttonAlfabetizado.innerHTML = `A-Z`
    } else {
        buttonAlfabetizado.innerHTML = `Z-A`
    }
    statusUpdate()
    renderList()

})

buttonAdult.addEventListener('click', () => {
    buttonAdult.classList.toggle('active')
    if (buttonAdult.classList.contains('active')) {
        buttonAdult.innerHTML = 'Filtro adultos On'
        
    } else {
        buttonAdult.innerHTML = 'Filtro adultos Off'
    }
    state.adultos = !state.adultos
    statusUpdate()
    renderList()
})

buttonReset.addEventListener('click', () => {
    state.ordemAZ = true //começaria false, mas usuarios já vem em ordem alfabetica
    search.value = ''
    state.busca = false
    state.adultos = false
    state.disponiveis = false
    renderList()
})

buttonAdd.addEventListener('click', addUser)

buttonDisponiveis.addEventListener('click', () => {
    state.disponiveis = !state.disponiveis
    if (state.disponiveis) {
        buttonDisponiveis.innerHTML = 'Desativar só ativos'
    } else {
        buttonDisponiveis.innerHTML = 'Ativar só ativos'
    }
    statusUpdate()
    renderList()
})

toggleCards.addEventListener('click', () => {
    cardList.classList.toggle('hidden')
    if (cardList.classList.contains('hidden')) {
        toggleCards.innerHTML = 'Mostrar lista'
    } else {
        toggleCards.innerHTML = 'Ocultar lista'
    }
})

buttonDark.addEventListener('click' , () => {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        buttonDark.innerHTML = '☀️ Light Mode'
    } else {
        buttonDark.innerHTML = '🌙 Dark Mode'
    }
})

buttonCompact.addEventListener('click', () => {
    const cardItem = document.querySelectorAll('.cardItem')
    cardItem.forEach((card) => {
        card.classList.toggle('compacto')
        if (card.classList.contains('compacto')) {
            buttonCompact.innerHTML = 'Descompactar Lista'
        } else {
            buttonCompact.innerHTML = 'Compactar Lista'
        }
    })
})