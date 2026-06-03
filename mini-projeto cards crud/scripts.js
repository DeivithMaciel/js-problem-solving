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

const state = {
    busca: '',
    adultos: false,
    ordemAZ: true
}


function renderCards(user) {
    if (!user.ativo) {
        return `
            <li class='cardItem'>
            <h2>${user.name}</h2>
            <a>${user.idade} anos</a>
            <h4>${user.cargo}</h4>
            <h4>${user.cidade}</h4>
            <p>Disponivel:❌</p>
            </li>`
    } else {
        return `
            <li class='cardItem'>
            <h2>${user.name}</h2>
            <a>${user.idade} anos</a>
            <p>${user.cargo}</p>
            <p>${user.cidade}</p>
            <p>Disponivel:✅</p>
            </li>`
    }
}

function statusUpdate() {
    status.innerHTML = '';
    let buscaString = '❌';
    let alfabeticoString = '❌';
    let adultoString = '❌';
    if (state.busca) {
        buscaString = '✅'
    }
    if (state.ordemAZ) {
        alfabeticoString = '✅'
    }
    if (state.adultos) {
        adultoString = '✅'
    }
    status.innerHTML = `
    <li class='statusList'>
    <p>busca:${buscaString}</p>
    <p>Ordem alfabética:${alfabeticoString}</p>
    <p>adulto:${adultoString}</p>
    </li>`
}

function toggleAdults(users) {
    if (state.adultos) {
        users = users.filter(({idade}) => idade >= 18)
    }
    return users
}

function togglesearch(users) {
    state.busca = search.value.trim()
    users = users.filter(({ name }) => {
        return name.toLowerCase().includes(state.busca.toLowerCase())
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

function renderList() {
    total.innerHTML = ''
    cardList.innerHTML = ''
    let resultado = [...usuarios]
    
    resultado = toggleAlfabetico(resultado)
    resultado = toggleAdults(resultado)
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

search.addEventListener('input', () => {
    if (state.busca.length === 0) {
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
    state.adultos = !state.adultos
    if (state.adultos) {
        buttonAdult.innerHTML = 'Remover filtro'
    } else {
        buttonAdult.innerHTML = 'Filtrar adultos'
    }
    statusUpdate()
    renderList()
})

buttonReset.addEventListener('click', () => {
    state.ordemAZ = true //começaria false, mas usuarios já vem em ordem alfabetica
    search.value = ''
    state.busca = false
    state.adultos = false
    renderList()
})