            //EXERCICIOS

// 🧩 1

// Buscar usuários e mostrar no console

// 🧩 2

// Mostrar só os nomes (map)

// 🧩 3

// Filtrar usuários com id > 5

// 🧩 4

// Criar array com:

// "Nome - Email"
// 🧩 5

// Contar quantos usuários existem (reduce)

// 🧩 6 (importante)

// Mostrar só empresas (company.name)

// 🧩 7

// Filtrar usuários de uma cidade específica

// 🧩 8

// Criar função que busca e retorna dados (não só console.log)

// 🧩 9 (nível júnior real)

// Transformar dados em:

// [
//   { nome: "Leanne", empresa: "Romaguera" }
// ]
// 🧩 10 (🔥 desafio)

// 👉 simular um mini sistema:

// buscar usuários
// filtrar
// transformar
// mostrar resultado final

            //resultados


    const URL = "https://jsonplaceholder.typicode.com/users"      

//1
async function usuarios() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
}
usuarios();

//2
async function namesList() {
    const res = await fetch(URL)
    const data = await res.json();
    console.log(data.map(user => user.name));
}
namesList();

//3
async function usersFilter() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.filter(({id}) => id > 5));
}
usersFilter();

//4
async function nameEmail() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.map( data => data.name + ' - ' + data.email))
}
nameEmail();

//5
async function quantidadeUsuarios() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.reduce((acum, item) => {
        return acum + 1
    }, 0))
}
quantidadeUsuarios();

6 
async function mostrarEmpresas() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.map((data) => data.company.name));
}
mostrarEmpresas();

7
async function cidade() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.filter((data) => data.address.city === 'Lebsackbury'))
}
cidade();

//8 
async function users() {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}
users().then(data => {
    console.log(data);
})

//9
async function nomeEmpresa() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.map((data) => "Nome: " + data.name + ", empresa: " + data.company.name))
}
nomeEmpresa();

//10
async function desafio() {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(
        data.filter((data) => data.id < 5)
        .map((data) => data.name + ' - ' + data.email)
    )
}
desafio();