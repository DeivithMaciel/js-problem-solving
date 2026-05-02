const URL = "https://jsonplaceholder.typicode.com/users"

const lista = document.querySelector('#lista');
const carregar = document.querySelector('#load');
const filtrar = document.querySelector('#filter');
const limpar = document.querySelector('#clear');

function renderUsers(users) {
    lista.innerHTML = '';
    users.forEach(({name, email}) => {
        const li = document.createElement('li');
        li.innerText = `nome: ${name}, email: ${email}`
        lista.appendChild(li);
    })
}

async function getUsers() {
    const res = await fetch(URL)
    const data = await res.json()
    renderUsers(data);
}

carregar.addEventListener('click', getUsers);

filtrar.addEventListener('click', async () => {
        const res = await fetch(URL);
        const data = await res.json();
        const filtrados = data.filter(user => user.id > 5);
        renderUsers(filtrados);
    }
);

limpar.addEventListener('click', () => {
    lista.innerHTML = "";
})
