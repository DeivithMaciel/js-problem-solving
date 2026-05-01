                //EXECICIOS

// 🧩 1

// Criar um botão e mudar texto ao clicar

// 🧩 2

// Mostrar uma lista de nomes no HTML

// 🧩 3

// Criar elementos dinamicamente (div, p)

// 🧩 4

// Renderizar array no HTML (forEach)

// 🧩 5

// Buscar API e mostrar nomes

// 🧩 6

// Mostrar nome + email

// 🧩 7

// Filtrar dados antes de mostrar

// 🧩 8 (🔥 importante)

// Limpar lista antes de renderizar de novo

// 🧩 9

// Criar botão "carregar usuários"

// 🧩 10 (🔥 desafio real)

// 👉 mini sistema:

// botão
// busca API
// filtra (ex: id < 5)
// mostra na tela

                //RESPOSTAS


const URL = "https://jsonplaceholder.typicode.com/users"
const lista = document.querySelector('#lista');
const botao = document.querySelector("#btn");
const botaoLista = document.querySelector("#show-list");

const nomes = ["Carlos", "Rodrigo", 'Rosangela'];
const listaCompras = [
    {produto: "Banana", preco: '4.99'},
    {produto: "Pão", preco: '5.50'},
    {produto: "Refrigerante", preco: '13.48'},
    {produto: "Carne", preco: '49.90'}
]

//1 
// botao.addEventListener('click', () => {
//     console.log("clicou");
// })

//2 
nomes.forEach(nome => {
    const li = document.createElement('li')
    li.innerText = nome
    lista.appendChild(li);
})

//3 
nomes.forEach(nome => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = nome
    div.appendChild(p);
    lista.appendChild(div);
})

//4
listaCompras.forEach(({produto, preco}) => {
    const li = document.createElement('li')
    li.innerText = `Produto: ${produto} - R$: ${preco}`
    lista.appendChild(li);
})

//5
lista.innerHTML = "";
async function carregar() {
    const res = await fetch(URL)
    const data = await res.json()

    data.forEach(({ name }) => {
        const li = document.createElement('li');
        li.innerText = name ;
        lista.appendChild(li);
    });
}
carregar();

//6
lista.innerHTML = "";
async function nameEmail() {
    const res = await fetch(URL)
    const data = await res.json()

    data.forEach(({ name, email }) => {
        const li = document.createElement('li')
        li.innerText = `${name} - ${email}`
        lista.appendChild(li);
    })
}
nameEmail();

//7
lista.innerHTML = "";
async function filtragem() {
    const res = await fetch(URL)
    const data = await res.json()

    data.filter(data => data.id > 5).forEach(({ name }) => {
        const li = document.createElement('li')
        li.innerText = name
        lista.appendChild(li);
    })
}
filtragem()

// 8 
lista.innerHTML = "";
nomes.forEach(nome => {
    const li = document.createElement('li')
    li.innerText = nome
    lista.appendChild(li);
})

//9
botao.addEventListener('click', filtragem);

//10
botaoLista.addEventListener('click', async () => {
    lista.innerHTML = "";

    const res = await fetch(URL)
    const data = await res.json()

    data
        .filter(({ id }) => id > 5)
        .forEach(({ name, company }) => {
        const li = document.createElement('li');
        li.innerText = `usuario: ${name} - empresa: ${company.name}`;
        lista.appendChild(li);
        });
});