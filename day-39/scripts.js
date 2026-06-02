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

let busca = false
let alfabetico = false
let adulto = false


function statusActive() {
    status.innerHTML = '';
    let buscaString = '❌';
    let alfabeticoString = '❌';
    let adultoString = '❌';
    if (busca) {
        buscaString = '✅'
    }
    if (alfabetico) {
        alfabeticoString = '✅'
    }
    if (adulto) {
        adultoString = '✅'
    }
    status.innerHTML = `
    <li class='statusList'>
    <p>busca:${buscaString}</p>
    <p>Ordem alfabética:${alfabeticoString}</p>
    <p>adulto:${adultoString}</p>
    </li>`
}

function renderList() {
    const searched = search.value.trim()
    total.innerHTML = ''
    cardList.innerHTML = ''
    let resultado = [...usuarios]
    
    if (alfabetico === true) {
        resultado = resultado .sort((a,b) => a.name.localeCompare(b.name))
    } else {
        resultado = resultado .sort((a,b) => b.name.localeCompare(a.name))
    }
    if (adulto === true) {
        resultado = resultado.filter(({idade}) => idade >= 18)
    }
    
    resultado = resultado.filter(({ name }) => name.toLowerCase().includes(searched.toLowerCase()));
    if (resultado.length === 0) {
        cardList.innerHTML = '<h3>Nenhum usuario encontrado</h3>'
    } else {
        cardList.innerHTML = resultado.map(renderCards).join('')
    }

    total.innerHTML = `Total: ${resultado.length} usuarios`
    statusActive()
}
renderList()

search.addEventListener('input', () => {
    busca = true
    renderList()
})

buttonAlfabetizado.addEventListener('click', () => {
    alfabetico = !alfabetico
    if (alfabetico) {
        buttonAlfabetizado.innerHTML = `A-Z`
    } else {
        buttonAlfabetizado.innerHTML = `Z-A`
    }
    statusActive()
    renderList()

})

buttonAdult.addEventListener('click', () => {
    adulto = !adulto
    if (adulto) {
        buttonAdult.innerHTML = 'Remover filtro'
    } else {
        buttonAdult.innerHTML = 'Filtrar adultos'
    }
    statusActive()
    renderList()
})