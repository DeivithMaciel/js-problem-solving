                //Renderizações

// const lista = document.querySelector("#lista");

// const nomes = ["Ana","João","Maria"];

// nomes.forEach(nome => {
//     const li = document.createElement('li')
//     li.innerText = nome

//     lista.appendChild(li); 
// })

        //Com API

const URL = "https://jsonplaceholder.typicode.com/users"

const lista = document.querySelector('#lista');

async function carregar() {
    const res = await fetch(URL)
    const data = await res.json()

    data.forEach(({ name, email}) => {
        const li = document.createElement('li');
        li.innerText = `${name} - ${email} `;

        lista.appendChild(li);
    });
}
carregar();